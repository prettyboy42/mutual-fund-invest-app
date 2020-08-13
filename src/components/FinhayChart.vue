<template>
  <q-card>
    <q-card-section>
      <apexchart id="{{state.chartId}}" type="line" :options="state.options" :series="state.series"></apexchart>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api';
export default defineComponent({
  name: 'FinhayMutualFundChart',
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: '',
    },
  },
  setup() {
    const state = reactive({
      chartId: 'finhayMF-humacdinh',
      options: {
        chart: {
          id: 'huco',
        },
        xaxis: {
          type: 'datetime',
        },
        legend: {
          show: true,
          showForSingleSeries: true,
        },
        title: {
          text: 'Finhay - Hủ cò',
          align: 'middle',
          style: {
            fontSize: '16px',
            fontWeight: 'bold',
          },
        },
      },
      series: [
        {
          name: 'series-1',
          data: [[]],
        },
      ],
    });

    return { state };
  },
});
</script>
