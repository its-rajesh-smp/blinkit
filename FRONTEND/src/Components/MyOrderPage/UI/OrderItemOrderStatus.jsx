import React from "react";
import DownloadInvoiceBtn from "../../Invoice/InvoiceBtn";

function OrderItemOrderStatus({ data }) {
  return (
    <div className=" shrink-0 md:p-5 flex flex-col gap-2">
      <p className=" font-bold">OrderID: {data.paymentOrderId}</p>
      <p className=" font-medium text-xs">Status : PENDING</p>
      <DownloadInvoiceBtn data={data} />
    </div>
  );
}

export default OrderItemOrderStatus;
