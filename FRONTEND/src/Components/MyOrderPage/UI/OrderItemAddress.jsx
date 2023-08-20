import React from "react";

function OrderItemAddress({ deliveryName, address, phoneNumber }) {
  return (
    <div className="py-5 flex flex-col  ">
      <p>{address}</p>
      <p>{deliveryName}</p>
      <p>{phoneNumber}</p>
    </div>
  );
}

export default OrderItemAddress;
