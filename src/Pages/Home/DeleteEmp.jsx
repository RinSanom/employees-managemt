import React, { useState } from "react";
import {
  useDeleteEmployeeMutation,
  useGetAllEmployeeQuery,
  useSearchEmployeeQuery,
} from "../../redux/features/demo/demoApi";
import { FaSearch, FaTrash } from "react-icons/fa";

export default function DeleteEmp() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data: allEmployees,
    error,
    isLoading,
    refetch,
  } = useGetAllEmployeeQuery();
  const { data: searchResults } = useSearchEmployeeQuery(searchTerm, {
    skip: searchTerm === "",
  });

  const [deleteEmployee] = useDeleteEmployeeMutation();

  const employeesToShow = searchTerm ? searchResults : allEmployees;

  return (
    <div className="p-6 ">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
        {/* Search */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
            Delete Employee
          </h1>
          <div className="relative w-80">
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              id="table-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 bg-gray-50 text-gray-800 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              placeholder="Search by name..."
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-100 dark:bg-gray-700 sticky top-0 z-10 text-gray-900 dark:text-gray-100">
              <tr className="text-sm font-semibold text-left">
                <th className="px-4 py-3 whitespace-nowrap">ID</th>
                <th className="px-4 py-3 whitespace-nowrap">First Name</th>
                <th className="px-4 py-3 whitespace-nowrap">Last Name</th>
                <th className="px-4 py-3 whitespace-nowrap">Email</th>
                <th className="px-4 py-3 whitespace-nowrap">Hire Date</th>
                <th className="px-4 py-3 whitespace-nowrap">Job Title</th>
                <th className="px-4 py-3 whitespace-nowrap">Salary</th>
                <th className="px-4 py-3 whitespace-nowrap">Department</th>
                <th className="px-4 py-3 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800">
              {isLoading ? (
                <tr>
                  <td colSpan="9" className="text-center py-6">
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan="9" className="text-center py-6 text-red-500">
                    Error fetching data.
                  </td>
                </tr>
              ) : employeesToShow?.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center py-6">
                    No employees found.
                  </td>
                </tr>
              ) : (
                employeesToShow?.map((emp) => (
                  <tr
                    key={emp.employee_id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-150">
                    <td className="px-4 py-2 whitespace-nowrap">
                      {emp.employee_id}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {emp.first_name}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {emp.last_name}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">{emp.email}</td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {emp.hire_date}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {emp.job_title}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      ${emp.salary}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      {emp.department_name}
                    </td>
                    <td className="px-4 py-2 whitespace-nowrap">
                      <button
                        onClick={() => {
                          deleteEmployee(emp.employee_id).then(() => {
                            refetch();
                          });
                        }}
                        className="flex items-center gap-1 text-red-600 hover:text-red-800 font-medium transition">
                        <FaTrash className="text-xs" />
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
