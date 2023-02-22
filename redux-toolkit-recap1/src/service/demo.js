import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react/";

export const demoApi = createApi({
  reducerPath: "demoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/"
  }),
  endpoints: builder => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET"
      })
    })
  })
});

export const { useGetAllPostQuery } = demoApi;
