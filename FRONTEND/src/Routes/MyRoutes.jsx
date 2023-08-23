import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import ProductsPage from "../Pages/ProductsPage";
import ProductPage from "../Pages/ProductPage";
import CartPage from "../Pages/CartPage";
import CheckoutPage from "../Pages/CheckoutPage";
import AddressPage from "../Pages/AddressPage";
import MyOrdersPage from "../Pages/MyOrdersPage";
import SearchPage from "../Pages/SearchPage";
import { useSelector } from "react-redux";

function MyRoutes() {
  const { auth } = useSelector((state) => state.authSlice);
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route
        path="/pl/:mainCategoryId/:subCategoryId"
        element={<ProductsPage />}
      />
      <Route path="/pd/:productId" element={<ProductPage />} />
      <Route path="/search" element={<SearchPage />} />
      {auth && (
        <>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/address" element={<AddressPage />} />
          <Route path="/myOrder" element={<MyOrdersPage />} />
        </>
      )}
      <Route path="*" element={<Homepage />} />
    </Routes>
  );
}

export default MyRoutes;
