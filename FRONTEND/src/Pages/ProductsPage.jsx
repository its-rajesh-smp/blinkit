import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import SubCategoryContainer from "../Components/ProductsPage/SubCategoryContainer";
import TopCategoryBar from "../Components/ProductsPage/TopCategoryBar";
import TopSortBar from "../Components/ProductsPage/TopSortBar";
import ProductsContainer from "../Components/ProductsPage/ProductsContainer";
import { ProductPageContextProvider } from "../Context/ProductPageContext";

function ProductsPage() {
  return (
    <ProductPageContextProvider>
      <div>
        <TopCategoryBar />
        <PageWrapper>
          <div className=" h-full flex w-full ">
            <SubCategoryContainer />
            <div className=" h-full w-full">
              <TopSortBar />
              <ProductsContainer />
            </div>
          </div>
        </PageWrapper>
      </div>
    </ProductPageContextProvider>
  );
}

export default ProductsPage;
