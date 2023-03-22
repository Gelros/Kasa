import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/404";
import Property from "../pages/Property";

const routes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/property/:id" element={<Property />} />
    </Routes>
  );
};

export default routes;
