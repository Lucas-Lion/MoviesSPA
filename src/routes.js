import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./views/Home";
import { Movies } from "./views/Movies";
import { RootLayout } from "./views/RootLayout";

export const Routes = createBrowserRouter([
    {
        path: "/",
        element: React.createElement(RootLayout),
        children: [
            {
                path: "/",
                element: React.createElement(Home)
            },
            {
                path: "/movies",
                element: React.createElement(Movies)
            }
        ]
    }
]);
