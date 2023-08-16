import React from "react";
import { NavLink, useParams } from "react-router-dom";

function SubCategory({ mainCategoryId, id, image, name }) {
  const { subCategoryId } = useParams();

  const isActive = id == subCategoryId;
  return (
    <NavLink
      to={`/pl/${mainCategoryId}/${id}`}
      className={` ${
        isActive ? "bg-green-200 border-l-8  border-l-green-500" : "bg-white "
      } hover:bg-green-200 transition-all  cursor-pointer flex flex-col  md:flex-row  items-center border-b  px-3  py-3 md:py-0 md:gap-4 `}
    >
      <img
        className={` ${
          isActive ? "rounded-2xl" : "rounded-none"
        } w-20 h-20 transition-all  object-cover object-center`}
        src={image}
        alt="sub category"
      />
      <p className=" text-sm font-medium">{name}</p>
    </NavLink>
  );
}

export default SubCategory;
