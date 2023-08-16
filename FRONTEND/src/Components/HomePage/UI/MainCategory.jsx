import React from "react";
import { NavLink } from "react-router-dom";

function MainCategory({ name, image, id }) {
  return (
    <NavLink to={`/pl/${id}/1`}>
      <div className="  shrink-0 w-28 h-40 gap-3  flex flex-col justify-center items-center">
        <img
          className=" w-full h-[60%] object-cover object-center"
          src={image}
          alt="mainCategory"
        />
        <p className=" text-center">{name}</p>
      </div>
    </NavLink>
  );
}

export default MainCategory;
