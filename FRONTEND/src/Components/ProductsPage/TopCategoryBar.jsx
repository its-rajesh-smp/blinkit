import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function TopCategoryBar() {
  const mainCategoryList = useSelector((state) => state.mainCategorySlice);

  const { mainCategoryId } = useParams();

  return (
    <div className="  hidden md:flex  h-12   justify-center   gap-10 sticky  top-20 bg-white left-0 z-10  border-b shadow-md  ">
      {mainCategoryList.map((category) => (
        <TopCategory
          firstSubCategoryId={category.subCategories[0].id}
          isActive={mainCategoryId == category.id}
          key={category.id}
          name={category.name}
          id={category.id}
        />
      ))}
    </div>
  );
}

export default TopCategoryBar;

function TopCategory({ name, isActive, id, firstSubCategoryId }) {
  return (
    <Link
      to={`/pl/${id}/${firstSubCategoryId}`}
      className={` px-4 flex items-center ${
        isActive ? " bg-green-600 text-white" : "bg-white hover:bg-green-100"
      } transition-all`}
    >
      <p>{name}</p>
    </Link>
  );
}
