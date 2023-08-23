import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import SearchedProductContainer from "../Components/SearchPage/SearchedProductContainer";

function SearchPage() {
  return (
    <PageWrapper className=" p-5">
      <SearchedProductContainer />
    </PageWrapper>
  );
}

export default SearchPage;
