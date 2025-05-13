import React, { useEffect, useState } from "react";
import {
  useAddEmployeeMutation,
  useUpDateEmployeeMutation,
} from "../../redux/features/demo/demoApi";
import { toast } from "react-toastify";
import Table from "../../components/table/Table";

export default function AddEditEmployee({ editingData, onSuccess }) {
  const [addEmployee] = useAddEmployeeMutation();
  const [updateEmployee] = useUpDateEmployeeMutation();
  const [refetchKey, setRefetchKey] = useState(0); // 🔑 For triggering table re-fetch

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    hire_date: "",
    job_title: "",
    salary: "",
    department_name: "",
  });

  useEffect(() => {
    if (editingData) {
      setFormData(editingData);
    }
  }, [editingData]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingData) {
        await updateEmployee({
          id: editingData.employee_id,
          data: formData,
        }).unwrap();
        toast.success("Employee updated successfully");
      } else {
        await addEmployee(formData).unwrap();
        toast.success("Employee added successfully");
      }

      // ✅ Trigger re-fetch in Table
      setRefetchKey((prev) => prev + 1);

      onSuccess?.();
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        hire_date: "",
        job_title: "",
        salary: "",
        department_name: "",
      });
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl p-6 bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">
          {editingData ? "Edit Employee" : "Add Employee"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "first_name",
            "last_name",
            "email",
            "hire_date",
            "job_title",
            "salary",
            "department_name",
          ].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium text-gray-700 capitalize">
                {field.replace("_", " ")}
              </label>
              <input
                type={
                  field === "hire_date"
                    ? "date"
                    : field === "email"
                    ? "email"
                    : "text"
                }
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required={[
                  "first_name",
                  "last_name",
                  "email",
                  "hire_date",
                  "department_name",
                ].includes(field)}
                className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
              />
            </div>
          ))}
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          {editingData ? "Update" : "Submit"}
        </button>
      </form>

      {/* ✅ Pass trigger prop to Table */}
      <Table refetchTrigger={refetchKey} />
    </div>
  );
}
