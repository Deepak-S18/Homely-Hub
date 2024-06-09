//import react library from react in to this js file
import React from "react";
//outlet is used to render the content of nested routes
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//arrow function
const Main = () => {
  return (
    <div>
      {/* Renderring the header and footer component, outlet */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
