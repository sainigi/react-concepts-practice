import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import ServicePage from "./components/ServicePage";
import AboutUsPage from "./components/AboutUsPage";
import ContactUsPage from "./components/ContactUsPage";
import CartPage from "./components/CartPage";
import ErrorPage from "./components/ErrorPage";
import RestaurantPage from "./components/RestaurantPage";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter( [
  {
    path: "/",
    element: <Applayout />,
    errorElement: <ErrorPage />, 
    children:[
      {
        path: "/",
        element: <App />, 
      },
      {
        path: "/service",
        element: <ServicePage />, 
      },
      {
        path: "/aboutus",
        element: <AboutUsPage />, 
      },
      {
        path: "/contactus",
        element: <ContactUsPage />, 
      },
      {
        path: "/cart",
        element: <CartPage />, 
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantPage />, 
      },

    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
