import React from "react";
import AddProductBTN from "../../Product/AddProductBTN";
import Offer from "../../Product/UI/Offer";

function Type() {
  return (
    <div className=" relative flex justify-between items-center border p-3 rounded-md ">
      <Offer discount={10} />
      <div className=" flex flex-col gap-1 ml-10">
        <p className=" text-xs">400g</p>
        <p className=" text-sm font-semibold">$30</p>
      </div>
      <AddProductBTN />
    </div>
  );
}

export default Type;
