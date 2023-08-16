import React, { useContext } from "react";
import ProductDetailsContext from "../../../Context/ProductDetailsPageContext";

function CategoryTree() {
  const { mainCategory, subCategory } = useContext(ProductDetailsContext);
  return (
    mainCategory && (
      <p className="text-xs">
        <span>Home</span>/ <span>{mainCategory.name}</span> /{" "}
        <span>{subCategory.name}</span>
      </p>
    )
  );
}

export default CategoryTree;
