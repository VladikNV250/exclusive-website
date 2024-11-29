import React from "react";
import {createRoot} from "react-dom/client"
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router";

const root = document.getElementById("root");

if (!root) {
    throw new Error("root container doesn't exist!");
}

const container = createRoot(root);

container.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);