import React, { useContext } from "react";
import { BsFilterRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import ProductPageContext from "../../Context/ProductPageContext";

function TopSortBar() {
  const { subCategoryList } = useContext(ProductPageContext);
  const { subCategoryId } = useParams();

  const currentCategory =
    subCategoryList &&
    subCategoryList.find((subCategory) => {
      return subCategory.id == subCategoryId;
    });

  return (
    <div className=" md:h-14  flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center p-3 w-full  border border-l-0">
      <div className=" flex justify-between w-full">
        <p className=" font-bold">Buy {currentCategory?.name} Online</p>
        <BsFilterRight className=" md:hidden text-4xl" />
      </div>

      {/* <div className=" w-full  md:justify-end self-start flex gap-2 items-center">
        <p className="  text-gray-500 text-xs">Sort By</p>
        <select className=" cursor-pointer  text-green-500 border rounded-md h-8 px-4 outline-1 outline-blue-500  text-sm">
          <option value="all">All</option>
          <option value="lowtohigh">Low To High</option>
          <option value="hightolow">High To Low</option>
          <option value="discount">Discount</option>
        </select>
      </div> */}
    </div>
  );
}

export default TopSortBar;
