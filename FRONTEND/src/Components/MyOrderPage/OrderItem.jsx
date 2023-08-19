import React from "react";
import OrderItemDetails from "./UI/OrderItemDetails";
import OrderItemAddress from "./UI/OrderItemAddress";
import OrderItemOrderStatus from "./UI/OrderItemOrderStatus";

function OrderItem() {
  return (
    <div className="  flex flex-col md:flex-row  itemc border gap-1 p-2 md:p-0 md:gap-20 ">
      <OrderItemDetails />
      <OrderItemAddress />
      <OrderItemOrderStatus />
    </div>
  );
}

export default OrderItem;
