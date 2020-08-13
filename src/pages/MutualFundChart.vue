<template>
  <q-page padding>
    <!-- <div class="q-pa-xs row items-start q-gutter-sm">
      <q-card class="col">
        <q-card-section>
          <apexchart type="line" :options="state.options" :series="state.series"></apexchart>
        </q-card-section>
      </q-card>
      <q-card class="col">
        <q-card-section>
          <apexchart type="line" :options="state.optionsCo" :series="state.seriesCo"></apexchart>
        </q-card-section>
      </q-card>
    </div>-->
    <div class="q-pa-xs row items-start q-gutter-sm">
      <div class="q-gutter-sm">
        <q-checkbox
          v-for="(item, index) in state.mutualFundList"
          :key="index"
          v-model="state.selections"
          :val="item"
          :label="item"
        />
      </div>
      <q-card class="col">
        <q-card-section>
          <apexchart type="area" height="450" :options="state.options" :series="state.series"></apexchart>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-xs q-pt-md">
      <q-table
        title="Dữ liệu NAV của các quỹ"
        dense
        :data="state.data"
        :columns="state.columns"
        row-key="name"
        :pagination="state.initialPagination"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  onMounted,
  watch,
} from '@vue/composition-api';
import axios from 'axios';
import { Notify } from 'quasar';
import groupBy from 'lodash/groupBy';
import orderBy from 'lodash/orderBy';
import mapValues from 'lodash/mapValues';
import { ChartSeries, QColumn, QData, TNavItem } from 'components/models';

const MUTUAL_FUND_LIST = [
  'TCFF',
  'SSIBF',
  'VFB',
  'TCBF',
  'VF1',
  'SCA',
  'BVBF',
  'VNDAF',
  'BVPF',
  'ETFVN30',
  'BCF',
  'ETFVN50',
  'VFC',
  'VF4',
  'TBF',
  'FIF',
  'TCEF',
  'VEOF',
  'VFF',
  'VIBF',
  'VCAMBF',
  'VNDBF',
  'FUESSVFL',
];
const options = {
  chart: {
    id: 'hurua',
  },
  xaxis: {
    type: 'datetime',
  },
  legend: {
    show: true,
    showForSingleSeries: true,
  },
  title: {
    text: 'Finhay - Các hủ đang đầu tư',
    align: 'middle',
    style: {
      fontSize: '16px',
      fontWeight: 'bold',
    },
  },
  stroke: {
    width: 2,
    curve: 'smooth',
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm',
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
};
const series: ChartSeries[] = [
  {
    name: 'series-1',
    data: [[]],
  },
];

async function loadData(symbol: string): Promise<number[][]> {
  const res = await axios.get(
    'https://nav.finhay.com.vn/public/nav?name=' + symbol
  );
  if (res.status == 200 && res.data) {
    return res.data as number[][];
  } else {
    Notify.create({
      color: 'negative',
      position: 'top',
      message: 'Loading failed',
      icon: 'report_problem',
    });
  }
  return [[]] as number[][];
}

function buildColumns(symbolList: string[]): QColumn[] {
  const transDateCol: QColumn[] = [
    {
      name: 'transDate',
      required: true,
      label: 'Ngày giao dịch',
      align: 'center',
      field: (row: QData) => row.transDate,
      format: (val: number) =>
        new Date(val).toLocaleDateString('en-GB', { timeZone: 'UTC' }),
      sortable: true,
    },
  ];
  const navColumns: QColumn[] = symbolList.map((symbol: string) => ({
    name: symbol,
    required: true,
    label: symbol,
    align: 'right',
    field: (row: QData) => row[symbol] || 0,
    format: (val: number) => new Intl.NumberFormat().format(val),
    sortable: true,
  }));
  return [...transDateCol, ...navColumns];
}

const convertArrayToObject = (array: TNavItem[]) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      transDate: item.transDate,
      [item.symbol]: item.nav,
    };
  }, initialValue);
};

export default defineComponent({
  name: 'MutualFundChart',
  setup() {
    const defaultColumns: QColumn[] = [];
    const defaultTableData: QData[] = [];
    const state = reactive({
      options: options,
      series: series,
      mutualFundList: MUTUAL_FUND_LIST,
      selections: ['TCBF', 'TCFF', 'SSIBF'],
      columns: defaultColumns,
      data: defaultTableData,
      initialPagination: {
        page: 1,
        rowsPerPage: 20,
        // rowsNumber: xx if getting data from a server
      },
    });

    const fetchData = () => {
      Promise.all(
        state.selections.map(async (symbol) => {
          const data = await loadData(symbol);
          return { name: symbol, data: data } as ChartSeries;
        })
      )
        .then((result: ChartSeries[]) => {
          state.series = result;
          const dataSeries: TNavItem[] = result.flatMap((it: ChartSeries) => {
            return it.data.map((el: number[]) => ({
              transDate: el[0],
              symbol: it.name,
              nav: el[1],
            }));
          });

          const data: QData[] = orderBy(
            Object.values(
              // eslint-disable-next-line @typescript-eslint/no-unsafe-call
              mapValues(groupBy(dataSeries, 'transDate'), (clist: TNavItem[]) =>
                convertArrayToObject(clist)
              )
            ),
            ['transDate'],
            ['desc']
          ) as QData[];
          // console.log(JSON.stringify(groupDa));
          state.data = data;
        })
        .catch((error) => {
          Notify.create({
            color: 'negative',
            position: 'top',
            message: error as string,
            icon: 'report_problem',
          });
        });
    };

    onMounted(() => {
      state.columns = buildColumns(state.selections);
      fetchData();
    });
    watch(
      () => state.selections,
      (selections: string[], oldList: string[]) => {
        state.columns = buildColumns(state.selections);
        console.log(`current is ${selections.toString()}`);
        console.log(`oldList is  ${oldList.toString()}`);
        fetchData();
      }
    );
    return { state };
  },
});
</script>
