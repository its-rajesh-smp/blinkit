import React from "react";
import SubCategory from "./UI/SubCategory";

function SubCategoryContainer() {
  return (
    <div className="hideScrollbar  sticky  top-0  bottom-0 left-0 shrink-0 flex-col  w-40 md:w-80   overflow-scroll h-screen border bg-gray-200">
      <SubCategory />
      <SubCategory />
      <SubCategory />
      <SubCategory />
      <SubCategory />
      <SubCategory />
      <SubCategory />
      <SubCategory />
      <SubCategory />
      <SubCategory />
      <SubCategory />
      <SubCategory />
    </div>
  );
}

export default SubCategoryContainer;
