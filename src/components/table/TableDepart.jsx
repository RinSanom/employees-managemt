import React from "react";
import { useGetAllDepartmentQuery } from "../../redux/features/demo/demoApi";

export default function TableDepart() {
  const { data, error, isLoading } = useGetAllDepartmentQuery();
  console.log("Department : ", data);

  if (isLoading) return <p className="p-4 text-gray-600">Loading...</p>;
  if (error)
    return <p className="p-4 text-red-500">Failed to load departments.</p>;
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200">
        <thead className="ltr:text-left rtl:text-right bg-gray-100">
          <tr className="*:font-medium *:text-gray-900">
            <th className="px-3 py-2 whitespace-nowrap">ID</th>
            <th className="px-3 py-2 whitespace-nowrap">Department</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 *:even:bg-gray-50">
          {data?.map((dept) => (
            <tr key={dept.department_id} className="*:text-gray-900">
              <td className="px-3 py-2 whitespace-nowrap">
                {dept.department_id}
              </td>
              <td className="px-3 py-2 whitespace-nowrap">
                {dept.department_name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
