import React from "react";
import MainCategory from "./UI/MainCategory";
import { useSelector } from "react-redux";

function MainCategoryContainer() {
  const mainCategoryList = useSelector((state) => state.mainCategorySlice);

  return (
    <div className="  hideScrollbar  mt-6 overflow-scroll flex gap-20 justify-left ">
      {mainCategoryList &&
        mainCategoryList.map((mainCategory) => (
          <MainCategory
            firstSubCategoryId={mainCategory.subCategories[0].id}
            key={mainCategory.id}
            name={mainCategory.name}
            id={mainCategory.id}
            image={mainCategory.image}
          />
        ))}
    </div>
  );
}

export default MainCategoryContainer;
