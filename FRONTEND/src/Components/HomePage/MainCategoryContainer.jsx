import React from "react";
import MainCategory from "./UI/MainCategory";
import useFetch from "../../Hooks/useFetch";
import { MAIN_CATEGORY_GET } from "../../Api/endpoints";

function MainCategoryContainer() {
  const mainCategoryList = useFetch(MAIN_CATEGORY_GET);

  return (
    <div className="  hideScrollbar  mt-6 overflow-scroll flex gap-5 justify-between ">
      {mainCategoryList &&
        mainCategoryList.map((mainCategory) => (
          <MainCategory
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
