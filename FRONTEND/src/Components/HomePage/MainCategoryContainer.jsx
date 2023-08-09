import React from "react";
import MainCategory from "./UI/MainCategory";

function MainCategoryContainer() {
  return (
    <div className="  hideScrollbar py-2 overflow-scroll flex gap-5 justify-between ">
      <MainCategory />
      <MainCategory />
      <MainCategory />
      <MainCategory />
      <MainCategory />
      <MainCategory />
    </div>
  );
}

export default MainCategoryContainer;
