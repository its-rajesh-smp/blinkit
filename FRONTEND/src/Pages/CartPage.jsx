import React, { useState } from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import CartContainer from "../Components/CartPage/CartContainer";
import CartSummery from "../Components/CartPage/CartSummery";
import useFetch from "../Hooks/useFetch";
import { CART } from "../Api/endpoints";
import { useSelector } from "react-redux";

import NotFound from "../Components/UI/NotFound";

function CartPage() {
  const [loader, setLoader] = useState(true);
  const fetchedCartItems = useFetch(CART, true, setLoader);
  const { total } = useSelector((state) => state.cartSlice);

  return (
    <PageWrapper loader={loader} className="px-2">
      {total.quantity > 0 ? (
        <div className="flex flex-col md:flex-row">
          <CartContainer fetchedCartItems={fetchedCartItems} />
          <CartSummery />
        </div>
      ) : (
        <NotFound
          image="https://grossy-app.vercel.app/images/empty_cart.webp"
          title="Your cart is empty"
          description="Your favourite items are just a click away"
          pathTitle="START SHOPING"
          path="/"
        />
      )}
    </PageWrapper>
  );
}

export default CartPage;
