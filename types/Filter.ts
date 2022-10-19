export enum FilterOperator {
  LessThanOrEquals, GreaterThanOrEquals, Contains, Equals
};

export type Filter = {
  key: string,
  operator: FilterOperator,
  value: any
};