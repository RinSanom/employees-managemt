import React, { useState } from "react";
import {
  useGetAllEmployeeQuery,
  useUpDateEmployeeMutation,
} from "../../redux/features/demo/demoApi";
import { toast } from "react-toastify";

export default function EditEmployee() {
  const {
    data: employees,
    isLoading,
    refetch, // to refetch data
  } = useGetAllEmployeeQuery();

  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [formData, setFormData] = useState({});
  const [updateEmployee] = useUpDateEmployeeMutation();
  const [searchQuery, setSearchQuery] = useState(""); // Search query state

  // Filter employees based on the search query
  const filteredEmployees = employees?.filter(
    (emp) =>
      emp.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEditClick = (emp) => {
    setSelectedEmployee(emp);
    setFormData({ ...emp });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee({ id: formData.employee_id, ...formData }).unwrap();
      toast.success("Employee updated successfully!");

      await refetch(); // Refetch to update the table
      setSelectedEmployee(null);
    } catch (error) {
      toast.error("Update failed.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>

      {/* Search Input */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
        />
      </div>

      {/* Employee Table */}
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="bg-gray-100">
            <tr className="text-left text-gray-700 *:px-4 *:py-2">
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Job Title</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="7" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : (
              filteredEmployees?.map((emp) => (
                <tr
                  key={emp.employee_id}
                  className="border-t *:px-4 *:py-2 hover:bg-gray-50">
                  <td>{emp.employee_id}</td>
                  <td>{emp.first_name}</td>
                  <td>{emp.last_name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.job_title}</td>
                  <td>{emp.salary}</td>
                  <td>
                    <button
                      onClick={() => handleEditClick(emp)}
                      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700">
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Edit Form */}
      {selectedEmployee && (
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">
            Edit Employee: {selectedEmployee.first_name}
          </h3>

          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              placeholder="First Name"
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              className="border px-3 py-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border px-3 py-2 rounded"
            />
            <input
              type="text"
              name="job_title"
              value={formData.job_title}
              onChange={handleChange}
              placeholder="Job Title"
              className="border px-3 py-2 rounded"
            />
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              placeholder="Salary"
              className="border px-3 py-2 rounded"
            />

            <div className="md:col-span-2 flex justify-end gap-4 pt-2">
              <button
                type="button"
                onClick={() => setSelectedEmployee(null)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Save
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
