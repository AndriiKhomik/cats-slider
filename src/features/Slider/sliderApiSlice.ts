import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";
import { Cat } from "../../types";

const catsAdapter = createEntityAdapter<Cat>({
  sortComparer: (a, b) => (a.breeds === b.breeds ? 0 : a.breeds ? 1 : -1),
});

const inititalState = catsAdapter.getInitialState();

export const sliderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCats: builder.query<Cat[], "cats">({
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

// @ts-ignore
export const { useGetCatsQuery } = sliderApiSlice;

export const selectCatsResult = sliderApiSlice.endpoints.getCats.select("cats");

const selectCatsData = createSelector(
  selectCatsResult,
  (catsResult) => catsResult
);

export const { selectAll: selectAllCats } = catsAdapter.getSelectors(
  // @ts-ignore
  (state) => selectCatsData(state) ?? inititalState
);
