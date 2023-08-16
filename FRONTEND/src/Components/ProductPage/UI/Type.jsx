import React from "react";
import AddProductBTN from "../../Product/AddProductBTN";
import Offer from "../../Product/UI/Offer";

function Type({ discount, id, name, price }) {
  return (
    <div className=" relative flex justify-between items-center border p-3 rounded-md ">
      <Offer discount={discount} />
      <div className=" flex flex-col gap-1 ml-10">
        <p className=" text-xs">{name}</p>
        <p className=" text-sm font-semibold">${price}</p>
      </div>
      <AddProductBTN />
    </div>
  );
}

export default Type;
