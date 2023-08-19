import React from "react";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className=" w-full flex-col h-full flex items-center justify-center">
      <img
        className=" w-96"
        src="https://grossy-app.vercel.app/images/empty_cart.webp"
        alt=""
      />
      <div className=" flex gap-3 items-center justify-center flex-col">
        <h1 className=" text-2xl font-bold">Your cart is empty</h1>
        <p className=" text-xs">Your favourite items are just a click away</p>
        <Link
          to="/"
          className=" w-fit bg-green-500 rounded-sm text-xs px-2 py-1"
        >
          START SHOPING
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
