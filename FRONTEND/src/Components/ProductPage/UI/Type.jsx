import React from "react";
import AddProductBTN from "../../Product/AddProductBTN";
import Offer from "../../Product/UI/Offer";

function Type({ discount, id, name, price, stock }) {
  return (
    <div className=" relative flex justify-between items-center border p-3 rounded-md ">
      {discount !== 0 && <Offer discount={discount} />}
      <div className={` flex flex-col gap-1 ${discount !== 0 && "ml-10"}`}>
        <p className=" text-xs">{name}</p>
        <p className=" text-sm font-semibold">${price}</p>
      </div>
      {stock > 0 ? <AddProductBTN id={id} /> : <p>OUT OF STOCK</p>}
    </div>
  );
}

export default Type;
