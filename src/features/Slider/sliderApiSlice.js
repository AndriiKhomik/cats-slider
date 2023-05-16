import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const catsAdapter = createEntityAdapter([]);

const inititalState = catsAdapter.getInitialState();

export const sliderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCats: builder.query({
      query: () => ({
        url: "/",
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result, error, arg) => {
        return [{ type: "cats" }];
      },
    }),
  }),
});

export const { useGetCatsQuery } = sliderApiSlice;

export const selectCatsResult = sliderApiSlice.endpoints.getCats.select();

const selectCatsData = createSelector(
  selectCatsResult,
  (catsResult) => catsResult
);

export const { selectAll: selectAllCats } = catsAdapter.getSelectors(
  (state) => selectCatsData(state) ?? inititalState
);
