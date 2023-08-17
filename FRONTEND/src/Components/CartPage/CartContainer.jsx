import React from "react";
import CartItem from "./UI/CartItem";

function CartContainer({ fetchedCartItems }) {
  return (
    <div className=" pt-10 w-full md:w-[60%] flex flex-col gap-5">
      <h1 className=" text-2xl font-medium">Your Cart Items</h1>
      {fetchedCartItems &&
        fetchedCartItems.map((item) => (
          <CartItem key={item.producttypeId} data={item} />
        ))}
    </div>
  );
}

export default CartContainer;
