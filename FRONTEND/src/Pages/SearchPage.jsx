import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import SearchedProductContainer from "../Components/SearchPage/SearchedProductContainer";
import SearchHistory from "../Components/SearchPage/SearchHistory";
import { SearchHistoryProvider } from "../Context/SearchHistoryContext";

function SearchPage() {
  return (
    <PageWrapper className=" gap-5 p-5">
      <SearchHistoryProvider>
        <SearchHistory />
        <SearchedProductContainer />
      </SearchHistoryProvider>
    </PageWrapper>
  );
}

export default SearchPage;
