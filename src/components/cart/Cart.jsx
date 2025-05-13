import React from "react";
import { useGetDepartmentQuery } from "../../redux/features/demo/demoApi";
import { FcDepartment } from "react-icons/fc";

export default function Cart() {
  const { data: departments, isLoading, isError } = useGetDepartmentQuery();
  return (
    <div>
      <div className="bg-white dark:bg-zinc-700 rounded-xl shadow p-6 w-64">
        <div className="flex justify-between items-start">
          <div className="bg-green-100 dark:bg-green-200/10 p-2 rounded-md">
            <FcDepartment />
          </div>
          <p className="text-gray-500 dark:text-gray-300">Total Departments</p>
        </div>
        <div className="items-center mt-4">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {isLoading ? "Loading..." : departments}
          </h2>
          <p className="text-green-500 flex items-center gap-1 mt-2">
            <span className="text-gray-500 dark:text-gray-300">
              {isError ? "Failed to load data" : "All departments loaded"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
