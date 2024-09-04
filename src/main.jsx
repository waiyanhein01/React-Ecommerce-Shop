import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/Router.route.jsx";

// import "atropos/scss"

ReactDOM.createRoot(document.getElementById("root")).render(<RouterProvider router={router}/>);
