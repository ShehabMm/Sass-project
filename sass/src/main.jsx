import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Edit from "./pages/Edit/Edit";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Error sorry</h1>,

  },
  {
    path: "/edit",
    element: <Edit/>,
    errorElement: <h1>Error sorry</h1>,

  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
