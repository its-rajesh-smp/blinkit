import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import SubCategoryContainer from "../Components/ProductsPage/SubCategoryContainer";
import TopCategoryBar from "../Components/ProductsPage/TopCategoryBar";
import TopSortBar from "../Components/ProductsPage/TopSortBar";
import ProductsContainer from "../Components/ProductsPage/ProductsContainer";

function ProductsPage() {
  return (
    <>
      <TopCategoryBar />
      <PageWrapper>
        <div className=" flex w-full ">
          <SubCategoryContainer />
          <div className=" w-full">
            <TopSortBar />
            <ProductsContainer />
          </div>
        </div>
      </PageWrapper>
    </>
  );
}

export default ProductsPage;
