import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import ProductsPage from "../Pages/ProductsPage";
import ProductPage from "../Pages/ProductPage";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/pl/:mainCategoryId/:subCategoryId"
        element={<ProductsPage />}
      />
      <Route path="/pd/:productId" element={<ProductPage />} />
    </Routes>
  );
}

export default MyRoutes;
