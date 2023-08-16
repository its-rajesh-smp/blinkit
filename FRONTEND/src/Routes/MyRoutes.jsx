import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import ProductsPage from "../Pages/ProductsPage";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/pl/:mainCategoryId/:subCategoryId"
        element={<ProductsPage />}
      />
    </Routes>
  );
}

export default MyRoutes;
