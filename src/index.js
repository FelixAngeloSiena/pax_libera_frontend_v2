import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/dashboard/Dashboard';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

