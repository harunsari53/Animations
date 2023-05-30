export interface IPieChart {
    svg?: Partial<any> | undefined;
    key: string | number;
    value?: number | undefined;
    arc?:
      | {
          outerRadius?: number | string | undefined;
          cornerRadius?: number | string | undefined;
        }
      | undefined;
  }