import React from "react";

function SubCategory() {
  return (
    <div className=" hover:bg-green-200 transition-all  cursor-pointer flex flex-col  md:flex-row  items-center border-b bg-white  px-3  py-3 md:py-0 md:gap-4 ">
      <img
        className=" w-20 h-20  object-cover object-center"
        src="https://res.cloudinary.com/dcu6sympq/image/upload/v1683924536/grocery/cookies/17_hdvfuw.webp"
        alt=""
      />
      <p className=" text-sm font-medium">Tea & Coffee</p>
    </div>
  );
}

export default SubCategory;
