import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import CartContainer from "../Components/CartPage/CartContainer";
import CartSummery from "../Components/CartPage/UI/CartSummery";

function CartPage() {
  return (
    <PageWrapper>
      <div className="flex">
        <CartContainer />
        <CartSummery />
      </div>
    </PageWrapper>
  );
}

export default CartPage;
