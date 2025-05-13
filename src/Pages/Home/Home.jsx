import React from "react";
import {
  useGetAllEmployeeQuery,
  useGetCountEmployeeQuery,
  useGetDepartmentQuery,
} from "../../redux/features/demo/demoApi";
import { Side } from "../../components/layout/sidebar";
import Cart from "../../components/cart/Cart";
import Employee from "../../components/cart/Employee";
import Table from "../../components/table/Table";
import TableDepart from "../../components/table/TableDepart";
const Home = () => {
  const { data, error, isLoading } = useGetDepartmentQuery();

  console.log(data);
  return (
    <>
      <div className="mt-6">
        <h2 className=" text-3xl ">Welcome To Employees Management</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-10">
        <Cart />
        <Employee />
      </div>
    </>
  );
};

export default Home;
