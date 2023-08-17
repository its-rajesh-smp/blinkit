import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import AddressContainer from "../Components/Address/AddressContainer";
import BillDetails from "../Components/CheckoutPage/UI/BillDetails";

function CheckoutPage() {
  return (
    <PageWrapper className="p-2">
      <div className=" flex flex-col md:flex-row ">
        <AddressContainer className=" w-full md:w-[60%]" />
        <BillDetails />
      </div>
    </PageWrapper>
  );
}

export default CheckoutPage;
