import React from "react";
import { Link } from "react-router-dom";

function AdCard({ image, path }) {
  return (
    <div className=" w-[16rem]   md:w-[20rem] md:h-[12rem] shrink-0  object-cover object-center ">
      <Link to={path}>
        <img className=" w-full h-full " src={image} alt="Ad-Image" />
      </Link>
    </div>
  );
}

export default AdCard;
