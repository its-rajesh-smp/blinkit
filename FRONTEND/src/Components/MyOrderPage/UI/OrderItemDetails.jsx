import React from "react";

function OrderItemDetails() {
  return (
    <div className=" shrink-0 flex items-center ml-5  gap-10">
      <img
        className=" w-20 h-20 object-cover"
        src="https://res.cloudinary.com/dcu6sympq/image/upload/v1683920754/grocery/fresh_vegetables/4_m2nyij.webp"
        alt=""
      />
      <div className=" p-1 md:py-5">
        <p>Corn Cob (Bhutta)</p>
        <p>25$ / 1piece</p>
        <p>Total: 25 x 3 = 500</p>
      </div>
    </div>
  );
}

export default OrderItemDetails;
