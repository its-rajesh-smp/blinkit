import React, { useContext } from "react";
import ProductDetailsContext from "../../../Context/ProductDetailsPageContext";
import { Link } from "react-router-dom";

function CategoryTree() {
  const { mainCategory, subCategory } = useContext(ProductDetailsContext);

  return (
    mainCategory && (
      <p className="text-xs flex gap-1 ">
        <span className=" hover:text-green-800  text-green-500">
          <Link to="/">Home</Link>
        </span>
        /
        <span className=" hover:text-green-800  text-green-500">
          <Link to={`/pl/${mainCategory.id}/${subCategory.id}`}>
            {mainCategory.name}
          </Link>
        </span>
        / <span className=" text-green-800  ">{subCategory.name}</span>
      </p>
    )
  );
}

export default CategoryTree;
