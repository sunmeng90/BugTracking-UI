export interface PageResult<T> {
  pageIndex: number;
  pageSize: number;
  totalPage: number;
  totalRecord: number;
  data: T[];
}
