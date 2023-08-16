import React, { useContext } from "react";
import CategoryTree from "./UI/CategoryTree";
import TypesContainer from "./UI/TypesContainer";
import WhyShopFromUs from "./UI/WhyShopFromUs";
import ProductDetailsContext from "../../Context/ProductDetailsPageContext";

function RightSide() {
  const { name } = useContext(ProductDetailsContext);
  return (
    <div className=" row-start-1 col-start-2  px-2 md:px-10 py-10  md:sticky top-20 right-0 md:h-[calc(100vh-80px)] w-full">
      <CategoryTree />
      <h1 className=" text-2xl font-medium">{name}</h1>
      <TypesContainer />
      <WhyShopFromUs />
    </div>
  );
}

export default RightSide;
