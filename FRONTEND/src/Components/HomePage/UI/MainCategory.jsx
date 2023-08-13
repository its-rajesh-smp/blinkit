import React from "react";

function MainCategory({ name, image }) {
  return (
    <div className="  shrink-0 w-28 h-40 gap-3  flex flex-col justify-center items-center">
      <img
        className=" w-full h-[60%] object-cover object-center"
        src={image}
        alt="mainCategory"
      />
      <p className=" text-center">{name}</p>
    </div>
  );
}

export default MainCategory;
