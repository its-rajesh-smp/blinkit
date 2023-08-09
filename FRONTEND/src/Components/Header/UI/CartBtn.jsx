import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

function CartBtn() {
  return (
    <div className=" row-start-2 md:row-start-auto   justify-between bottom-10 left-2 right-2  fixed md:static  md:w-32 md:h-14  h-20  rounded-md  text-white px-4 flex items-center bg-green-500   gap-2">
      <div className="flex  items-center gap-3">
        <div>
          <AiOutlineShoppingCart className=" text-2xl" />
        </div>
        <div className="  font-bold leading-5">
          <p>2 items</p>
          <p>$256</p>
        </div>
      </div>
      <p className=" block md:hidden">View Cart</p>
    </div>
  );
}

export default CartBtn;
