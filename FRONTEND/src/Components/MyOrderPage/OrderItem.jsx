import React from "react";
import OrderItemDetails from "./UI/OrderItemDetails";
import OrderItemAddress from "./UI/OrderItemAddress";
import OrderItemOrderStatus from "./UI/OrderItemOrderStatus";

function OrderItem({ data }) {
  const {
    deliveryName,
    address,
    phoneNumber,
    quantity,
    paymentOrderId,
    producttype,
  } = data;

  return (
    <div className="  flex flex-col  md:grid grid-cols-3  itemc border gap-1 p-2 md:p-0 md:gap-20 ">
      <OrderItemDetails producttype={producttype} quantity={quantity} />
      <OrderItemAddress
        deliveryName={deliveryName}
        address={address}
        phoneNumber={phoneNumber}
      />
      <OrderItemOrderStatus data={data} />
    </div>
  );
}

export default OrderItem;
