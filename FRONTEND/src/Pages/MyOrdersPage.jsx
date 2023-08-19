import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import OrderItem from "../Components/MyOrderPage/OrderItem";

function MyOrdersPage() {
  return (
    <PageWrapper className="p-5 gap-5">
      <h1 className=" text-2xl font-bold">Your Orders</h1>
      <div className=" flex flex-col gap-4">
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </PageWrapper>
  );
}

export default MyOrdersPage;
