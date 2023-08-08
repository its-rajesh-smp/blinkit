import React from "react";
import PageWrapper from "../Components/Wrapper & Cards/PageWrapper";
import TopBanner from "../Components/HomePage/UI/TopBanner";
import AdCarousel from "../Components/HomePage/AdCarousel";

function Homepage() {
  return (
    <PageWrapper>
      <TopBanner />
      <AdCarousel />
    </PageWrapper>
  );
}

export default Homepage;
