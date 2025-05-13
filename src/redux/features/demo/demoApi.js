import { apiSlice } from "../apiSlice/apiSlice";
export const demoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllEmployee: builder.query({
      query: () => {
        return {
          url: "/employees",
        };
      },
    }),
    getCountEmployee: builder.query({
      query: () => {
        return {
          url: "/employee-number",
        };
      },
    }),
    getDepartment: builder.query({
      query: () => {
        return {
          url: "/department-numer",
        };
      },
    }),
    getAllDepartment: builder.query({
      query: () => {
        return {
          url: "/departments",
        };
      },
    }),
    addEmployee: builder.mutation({
      query: (employeeData) => ({
        url: "/add-employee",
        method: "POST",
        body: employeeData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
   searchEmployee: builder.query({
      query: (term) => `employees/search?name=${term}`, // adjust based on your backend
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/delete-employee/${id}`,
        method: "DELETE",
      }),
    }),
    upDateEmployee: builder.mutation({
      query: ({ id, ...employeeData }) => ({
        url: `/update-employee/${id}`,
        method: "PATCH",
        body: employeeData,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});
export const {
  useGetAllEmployeeQuery,
  useGetCountEmployeeQuery,
  useGetDepartmentQuery,
  useGetAllDepartmentQuery,
  useAddEmployeeMutation,
  useSearchEmployeeQuery,
  useDeleteEmployeeMutation,
  useUpDateEmployeeMutation,
} = demoApi;
