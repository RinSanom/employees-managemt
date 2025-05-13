import React, { useState } from "react";
import { useGetAllEmployeeQuery } from "../../redux/features/demo/demoApi";

export default function Table() {
  const { data: totalEmp, isLoading } = useGetAllEmployeeQuery();
  const [search, setSearch] = useState("");

  // Filtered employee list based on search query
  const filteredEmployees = totalEmp?.filter((emp) =>
    `${emp.first_name} ${emp.last_name} ${emp.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      {/* Search Box */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full p-2 border border-gray-300 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className="ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-gray-900 bg-gray-100 sticky top-0 z-10">
              <th className="px-3 py-2 whitespace-nowrap">ID</th>
              <th className="px-3 py-2 whitespace-nowrap">First Name</th>
              <th className="px-3 py-2 whitespace-nowrap">Last Name</th>
              <th className="px-3 py-2 whitespace-nowrap">Email</th>
              <th className="px-3 py-2 whitespace-nowrap">Hire Date</th>
              <th className="px-3 py-2 whitespace-nowrap">Job Title</th>
              <th className="px-3 py-2 whitespace-nowrap">Salary</th>
              <th className="px-3 py-2 whitespace-nowrap">Department</th>
            </tr>
          </thead>
        </table>

        {/* Scrollable tbody */}
        <div className="max-h-[420px] overflow-y-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <tbody className="divide-y divide-gray-200 *:even:bg-gray-200">
              {isLoading ? (
                <tr>
                  <td colSpan="8" className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              ) : (
                filteredEmployees?.map((emp) => (
                  <tr key={emp.id} className="hover:bg-gray-50">
                    <td className="px-3 py-2 whitespace-nowrap">
                      {emp.employee_id}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {emp.first_name}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {emp.last_name}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">{emp.email}</td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {emp.hire_date}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {emp.job_title}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {emp.salary}
                    </td>
                    <td className="px-3 py-2 whitespace-nowrap">
                      {emp.department_name}
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
