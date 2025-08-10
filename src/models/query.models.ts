export interface QueryError {
  code: string;
  message: string;
  name: string;
  response: {
    data: {
      message: string;
      status: string;
      time: string;
    };
  };
}

export interface PaginationRequest {
  pageNumber?: number;
  pageSize?: number;
  sortOrder?: 'asc' | 'desc';
}

export interface PaginationResponse<T> {
  pageNumber: number;
  pageSize: number;
  totalElementCount: number;
  totalPageCount: number;
  content: T[];
}

export interface ErrorResponse {
  code: string;
  message: string;
  response: {
    data: {
      message: string;
      status: string;
    };
    status: number;
  };
}
