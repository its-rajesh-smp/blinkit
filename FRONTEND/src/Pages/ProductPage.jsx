import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import LeftSide from "../Components/ProductPage/LeftSide";
import RightSide from "../Components/ProductPage/RightSide";
import ProductDetails from "../Components/ProductPage/UI/ProductDetails";
import { ProductDetailsProvider } from "../Context/ProductDetailsPageContext";

function ProductPage() {
  return (
    <PageWrapper className=" px-4  md:py-0 ">
      <div className="flex flex-col gap-10 md:gap-0 md:grid grid-cols-2  grid-rows-productDetails">
        <ProductDetailsProvider>
          <LeftSide />
          <RightSide />
          <ProductDetails />
        </ProductDetailsProvider>
      </div>
    </PageWrapper>
  );
}

export default ProductPage;
