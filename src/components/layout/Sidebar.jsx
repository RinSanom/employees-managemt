import { Link, NavLink } from "react-router";

export function Side() {
  return (
    <div className="flex h-screen flex-col justify-between border-e sticky top-0 start-0 border-gray-100 bg-gray-300">
      <div className="px-4 py-6">
        <img src="http://rupp.edu.kh/images/rupp-logo.png" alt="" />

        <ul className="mt-6 space-y-1">
          <li>
            <a
              href="/"
              className="block rounded-lg  px-4 py-2 text-sm font-medium text-gray-700">
              Dashbord
            </a>
          </li>

          <li>
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                <span className="text-sm font-medium"> Management </span>

                <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <ul className="mt-2 space-y-1 px-4">
                <li>
                  <NavLink
                    to={"/allemployee"}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    List All Employees
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/addemployee"}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Add Employee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/updateemployee"}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Update Employee
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/deleteemployee"}
                    className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    Delete Employee
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>

          <li>
            <NavLink
              to={"/aboutme"}
              className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700">
              About Me
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
