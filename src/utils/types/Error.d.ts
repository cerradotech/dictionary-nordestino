declare type ResponseData = {
  message: string;
  code: string;
};

declare type ResponseError = {
  status: number;
  data: ResponseData;
};
