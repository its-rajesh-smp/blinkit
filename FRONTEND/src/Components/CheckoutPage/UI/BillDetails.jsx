import React from "react";

function BillDetails() {
  return (
    <div className="w-full md:w-[40%] flex flex-col  p-10 ">
      <h1 className=" text-2xl font-medium">Bill Details</h1>

      <div className=" flex flex-col gap-2  ">
        <p className=" flex justify-between mt-5 pt-5 border-t-2 text-xs ">
          <span>MRP</span>
          <span>Rs. 19.00</span>
        </p>
        <p className=" flex justify-between mb-5 pb-5 text-xs border-b-2">
          <span>Delivery charge</span>
          <span>FREE</span>
        </p>
        <p className=" flex  justify-between text-xs font-bold">
          <span>Grand total</span>
          <span>Rs. 19.00</span>
        </p>
      </div>
    </div>
  );
}

export default BillDetails;
