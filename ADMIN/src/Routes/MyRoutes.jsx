import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateCategory from "../Pages/CreateCategory";
import CreateSubCategory from "../Pages/CreateSubCategory";
import CreateProduct from "../Pages/CreateProduct";
import CreateProductType from "../Pages/CreateProductType";

function MyRoutes() {
  return (
    <Routes>
      <Route element={<CreateCategory />} path="/" />
      <Route element={<CreateSubCategory />} path="/sc" />
      <Route element={<CreateProduct />} path="/cp" />
      <Route element={<CreateProductType />} path="/cpt" />
    </Routes>
  );
}

export default MyRoutes;
