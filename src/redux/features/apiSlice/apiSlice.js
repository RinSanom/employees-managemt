import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api",

    prepareHeaders: async (headers, { getState, endpoint }) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", `${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({}),
});
