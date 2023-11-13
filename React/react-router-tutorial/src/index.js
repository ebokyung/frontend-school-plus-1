import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./pages/Root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorNotFound from "./pages/ErrorNotFound";
import About from "./pages/About";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root"),
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
