import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/dashboard/Dashboard';
import PurchaseRequest from './components/purchases/request/dept_head/PurchaseRequest';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  {
    path: "/depthead-purchase-request",
    element: <PurchaseRequest />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

