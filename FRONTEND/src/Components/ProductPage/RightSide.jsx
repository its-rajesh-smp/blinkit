import React from "react";
import CategoryTree from "./UI/CategoryTree";
import TypesContainer from "./UI/TypesContainer";
import WhyShopFromUs from "./UI/WhyShopFromUs";

function RightSide() {
  return (
    <div className=" row-start-1 col-start-2  px-2 md:px-10 py-10  md:sticky top-20 right-0 md:h-[calc(100vh-80px)] w-full">
      <CategoryTree />
      <h1 className=" text-2xl font-medium">Moreish Classic White Bread</h1>
      <TypesContainer />
      <WhyShopFromUs />
    </div>
  );
}

export default RightSide;
