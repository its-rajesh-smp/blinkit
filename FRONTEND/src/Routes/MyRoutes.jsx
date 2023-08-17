import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import ProductsPage from "../Pages/ProductsPage";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/pl/:mainCategoryId/:subCategoryId"
        element={<ProductsPage />}
      />
      <Route path="/pd/:productId" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default MyRoutes;
