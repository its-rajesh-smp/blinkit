import React, { useState } from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import OrderItem from "../Components/MyOrderPage/OrderItem";
import useFetch from "../Hooks/useFetch";
import { ORDER } from "../Api/endpoints";
import LoadingPage from "../Components/UI/LoadingPage";
import NotFound from "../Components/UI/NotFound";

function MyOrdersPage() {
  const [loader, setLoader] = useState(true);
  const allOrders = useFetch(ORDER, true, setLoader);

  return !loader ? (
    <PageWrapper className="p-5 gap-5">
      {allOrders.length > 0 ? (
        <>
          <h1 className=" text-2xl font-bold">Your Orders</h1>
          <div className=" flex flex-col gap-4">
            {allOrders &&
              allOrders.map((order) => (
                <OrderItem key={order.id} data={order} />
              ))}
          </div>
        </>
      ) : (
        <>
          <NotFound
            image="https://img.freepik.com/free-vector/empty-concept-illustration_114360-7416.jpg?t=st=1692450998~exp=1692451598~hmac=157dce2f218b2ce7d28ccdf34c4c8cf87f69534b5c19bd6102e6da6e41faf071"
            title="No order present"
            description="Your favourite items are just a click away"
            path="/"
            pathTitle="START SHOPING"
          />
        </>
      )}
    </PageWrapper>
  ) : (
    <LoadingPage className=" h-[calc(100vh-10rem)]" />
  );
}

export default MyOrdersPage;
