export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface ChartPoint {
  x: number | string;
  y: number;
}

export interface ChartSeries {
  name: string;
  data: number[][];
  color?: string;
  visible?: boolean;
}

export interface QColumn {
  name: string;
  required?: boolean;
  label: string;
  align: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  field: (val: any, row: any) => any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  format: (val: any, row: any) => any;
  sortable?: boolean;
}

export interface QData {
  transDate: number;
  [propName: string]: number;
}

export interface TNavItem {
  transDate: number;
  symbol: string;
  nav: number;
}
