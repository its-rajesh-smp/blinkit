import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import AddProductBTN from "../../Product/AddProductBTN";
import { useSelector } from "react-redux";

function CartItem({ data }) {
  const { cartObj } = useSelector((state) => state.cartSlice);

  // If The Item is not present in the cartObject that means not present so we will not show that item
  if (!cartObj[data.producttypeId]) {
    return;
  }

  const price = cartObj[data.producttypeId].price;
  const quantity = cartObj[data.producttypeId].quantity;

  return (
    <div className=" flex justify-between pr-5 items-center">
      <div className=" flex items-center gap-4">
        <img
          className=" w-32  h-32 border "
          src={JSON.parse(data.producttype.product.images)[0]}
          alt="product image"
        />
        <div className=" flex flex-col gap-4 text-md">
          <p>{data.producttype.product.name}</p>
          <div>
            <p className="  font-bold">
              ${price} / {data.producttype.name}
            </p>
            <p>
              {price} x {quantity}p = {price * quantity}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[20%] md:w-fit  h-full  items-end gap-10  flex flex-col justify-center   ">
        <AiOutlineDelete className=" cursor-pointer text-red-600" />
        <AddProductBTN id={data.producttypeId} />
      </div>
    </div>
  );
}

export default CartItem;
