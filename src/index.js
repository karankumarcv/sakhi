import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import "./styles/App.css";

import Home from "./pages/Home";
import Community from "./pages/Community";
import Friends from "./pages/Friends";
import Sakhi from "./pages/Sakhi";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <Home />
      </React.Fragment>
    ),
  },
  {
    path: "/community",
    element: <Community />,
  },
  {
    path: "/friends",
    element: <Friends />,
  },
  {
    path: "/sakhi",
    element: <Sakhi />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
