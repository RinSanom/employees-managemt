import { Provider } from "react-redux";
import { store } from "./redux/app/store";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router";
import RootLayout from "./components/layout/Root.jsx";
import { Route, Routes } from "react-router";
import AddEmp from "./Pages/Home/AddEmp.jsx";
import DeleteEmp from "./Pages/Home/DeleteEmp.jsx";
import AllEmp from "./Pages/Home/AllEmp.jsx";
import UpdateEmployee from "./Pages/Home/UpdateEmp.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AboutMe from "./Pages/Home/AboutMe.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RootLayout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/allemployee" element={<AllEmp />} />
            <Route path="/addemployee" element={<AddEmp />} />
            <Route path="/updateemployee" element={<UpdateEmployee />} />
            <Route path="/deleteemployee" element={<DeleteEmp />} />
            <Route path="/aboutme" element={<AboutMe />} />
          </Routes>
          <ToastContainer position="top-center" autoClose={3000} />
        </RootLayout>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
