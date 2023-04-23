import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductSimple from "../components/UserCard";
import Edit from "./Edit";
import Home from "./Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Edit />} />
    </Routes>
  );
};

export default MainRoutes;
