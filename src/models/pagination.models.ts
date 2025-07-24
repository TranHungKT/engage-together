export interface PaginationParams {
  pageNumber: number;
  pageSize: number;
}

export interface PaginationResponse<T> {
  content: T[];
  pageNumber: number;
  pageSize: number;
  totalElementCount: number;
  totalPageCount: number;
}
