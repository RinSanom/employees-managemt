import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div>
      <Home />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
export default App;
