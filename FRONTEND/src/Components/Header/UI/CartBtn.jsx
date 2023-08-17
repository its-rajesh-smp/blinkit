import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

function CartBtn() {
  const { total, cart } = useSelector((state) => state.cartSlice);

  return (
    <div
      className={` ${
        cart.length === 0 ? "hidden md:flex justify-center" : "justify-between"
      } row-start-2 md:row-start-auto  flex bottom-10 left-2 right-2  fixed md:static  md:w-32 md:h-14  h-20  rounded-md  text-white px-4  items-center bg-green-500   gap-2`}
    >
      <div className="flex items-center gap-3">
        <div>
          <AiOutlineShoppingCart className=" text-2xl" />
        </div>
        {cart.length !== 0 && (
          <div className="  font-bold leading-5">
            <p>{cart.length} items</p>
            <p>${total.price}</p>
          </div>
        )}
      </div>
      <p className=" block md:hidden">View Cart</p>
    </div>
  );
}

export default CartBtn;
