import React from "react";
import InputButton from "../../Input/InputButton";

function CartSummery() {
  return (
    <div className=" w-[40%] p-10 border-l h-[calc(100vh-5rem)]">
      <h1 className=" text-xl font-medium py-3  border-b-2">
        Cart Summery Details
      </h1>

      <div className=" flex justify-between text-xl font-medium py-3">
        <h1>Grand total</h1>
        <h1>299.00$</h1>
      </div>

      <div className=" flex justify-end mt-10">
        <InputButton
          className=" bg-green-600 text-white w-fit px-5 h-10 rounded-md"
          placeHolder="Checkout"
        />
      </div>
    </div>
  );
}

export default CartSummery;
