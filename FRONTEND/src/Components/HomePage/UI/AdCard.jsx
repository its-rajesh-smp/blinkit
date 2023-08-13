import React from "react";

function AdCard({ image, path }) {
  return (
    <div className=" w-[16rem]   md:w-[20rem] md:h-[12rem] shrink-0  object-cover object-center ">
      <img className=" w-full h-full " src={image} alt="Ad-Image" />
    </div>
  );
}

export default AdCard;
