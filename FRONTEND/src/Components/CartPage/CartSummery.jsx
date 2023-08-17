import React from "react";
import InputButton from "../Input/InputButton";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function CartSummery() {
  const { total } = useSelector((state) => state.cartSlice);

  return (
    <div className=" w-full md:w-[40%] p-10 border-l  md:h-[calc(100vh-5rem)]">
      <h1 className=" text-xl font-medium py-3  border-b-2">
        Cart Summery Details
      </h1>

      <div className=" flex justify-between text-xl font-medium py-3">
        <h1>Grand total</h1>
        <h1>{total.price}$</h1>
      </div>
      <div className=" flex justify-between text-xl font-medium py-3">
        <h1>Total items</h1>
        <h1>{total.quantity}$</h1>
      </div>

      <Link to={"/checkout"} className=" flex justify-end mt-10">
        <InputButton
          className=" bg-green-600 text-white w-fit px-5 h-10 rounded-md"
          placeHolder="Checkout"
        />
      </Link>
    </div>
  );
}

export default CartSummery;
