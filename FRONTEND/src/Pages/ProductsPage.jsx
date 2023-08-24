import React, { useState } from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import SubCategoryContainer from "../Components/ProductsPage/SubCategoryContainer";
import TopCategoryBar from "../Components/ProductsPage/TopCategoryBar";
import TopSortBar from "../Components/ProductsPage/TopSortBar";
import ProductsContainer from "../Components/ProductsPage/ProductsContainer";
import { ProductPageContextProvider } from "../Context/ProductPageContext";
import NotFound from "../Components/UI/NotFound";

function ProductsPage() {
  const [isPresent, setIsPresent] = useState(false);
  const [loader, setLoader] = useState(true);

  return (
    <ProductPageContextProvider
      setLoader={setLoader}
      setIsPresent={setIsPresent}
    >
      <div>
        <TopCategoryBar />
        <PageWrapper loader={loader}>
          {isPresent ? (
            <div className=" h-full flex w-full ">
              <SubCategoryContainer />
              <div className=" h-full w-full">
                <TopSortBar />
                <ProductsContainer />
              </div>
            </div>
          ) : (
            <NotFound
              path="/home"
              pathTitle="Go Home"
              title="Opps no product found"
              image="https://img.freepik.com/free-vector/empty-concept-illustration_114360-7416.jpg?w=740&t=st=1692849552~exp=1692850152~hmac=bc081e3276891bebe8fc6d8e32899933185ee5f12f0937b2d29cddc8857df7fe"
            />
          )}
        </PageWrapper>
      </div>
    </ProductPageContextProvider>
  );
}

export default ProductsPage;
