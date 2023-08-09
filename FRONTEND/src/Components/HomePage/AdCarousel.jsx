import React from "react";
import AdCard from "./UI/AdCard";

function AdCarousel() {
  return (
    <div className=" box-border hideScrollbar mx-auto w-full  gap-2 md:gap-5 overflow-scroll  flex">
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
      <AdCard />
    </div>
  );
}

export default AdCarousel;
