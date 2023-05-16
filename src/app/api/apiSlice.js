import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const API_KEY =
  "live_uiFklrAFGW6eaJYRySAZ6ay13ZaWf1ls7TYRNtnPFD2C1JFrjP6J36aaCv3KcxkB";
const BASE_URL = "https://api.thecatapi.com";

const baseQuery = fetchBaseQuery({
  baseUrl: `${BASE_URL}/v1/images/search?limit=10&api_key=${API_KEY}`,
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["cats"],
  endpoints: (builder) => ({}),
});
