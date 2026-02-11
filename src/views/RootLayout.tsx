import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";

export function RootLayout() {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header, null),
    React.createElement(Outlet, null)
  );
}
