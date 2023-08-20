import React from "react";
import InputButton from "../../Input/InputButton";
import { TbFileInvoice } from "react-icons/tb";

function OrderItemOrderStatus({ paymentOrderId }) {
  return (
    <div className=" shrink-0 md:p-5 flex flex-col gap-2">
      <p className=" font-bold">OrderID: {paymentOrderId}</p>
      <p className=" font-medium text-xs">Status : PENDING</p>
      <InputButton
        className="  w-fit flex items-center gap-2 h-10 rounded-sm  bg-zinc-400 px-2"
        placeHolder="Download Invoice"
        icon={<TbFileInvoice />}
      />
    </div>
  );
}

export default OrderItemOrderStatus;
