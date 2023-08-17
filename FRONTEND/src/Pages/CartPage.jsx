import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import CartContainer from "../Components/CartPage/CartContainer";
import CartSummery from "../Components/CartPage/CartSummery";
import useFetch from "../Hooks/useFetch";
import { CART } from "../Api/endpoints";

function CartPage() {
  const fetchedCartItems = useFetch(CART, true);

  return (
    <PageWrapper className="px-2">
      <div className="flex flex-col md:flex-row">
        <CartContainer fetchedCartItems={fetchedCartItems} />
        <CartSummery />
      </div>
    </PageWrapper>
  );
}

export default CartPage;
