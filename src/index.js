import React from "react";
import { createRoot } from "react-dom/client";
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Navbar';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);