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
