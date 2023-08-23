import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query";

export interface IPrice {
  errors?: null;
  response?: number;
}

export interface ApiResponse {
  data?: IPrice;
  error?: FetchBaseQueryError | SerializedError;
}