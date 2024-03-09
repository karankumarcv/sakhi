import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import "./styles/App.css";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Friends from "./pages/Friends";
import Sakhi from "./pages/Sakhi";
import Analyse from "./pages/Analyse";
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
    path: "/Track",
    element: <Home />,
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
  {
    path: "/Analyse",
    element: <Analyse />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
