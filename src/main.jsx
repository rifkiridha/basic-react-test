import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import AppRegister from './pages/register.jsx';
import AppLogin from './pages/login.jsx';
import ProductPage from './pages/products.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/register",
    element: <AppRegister/>,
  },
  {
    path: "/login",
    element: <AppLogin/>,
  },
  {
    path: "/products",
    element: <ProductPage/>,
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
