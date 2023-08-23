import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import TopBanner from "../Components/HomePage/UI/TopBanner";
import AdCarousel from "../Components/HomePage/AdCarousel";
import MainCategoryContainer from "../Components/HomePage/MainCategoryContainer";
import ProductCarousel from "../Components/HomePage/ProductCarousel";

function Homepage() {
  return (
    <PageWrapper className="p-2">
      <TopBanner />
      <AdCarousel />
      <MainCategoryContainer />
      <ProductCarousel title="Vegetables & Fruits" mainCategoryId="1" />
      <ProductCarousel title="Bakery & Biscuits" mainCategoryId="2" />
    </PageWrapper>
  );
}

export default Homepage;
