import React from "react";

function TopCategoryBar() {
  return (
    <div className="  hidden md:flex  h-12   justify-center   gap-10 sticky  top-20 bg-white left-0 z-10  border-b shadow-md  ">
      <TopCategory />
      <TopCategory />
      <TopCategory />
      <TopCategory />
      <TopCategory />
      <TopCategory />
      <TopCategory />
    </div>
  );
}

export default TopCategoryBar;

function TopCategory() {
  return (
    <div className="flex  hover:bg-gray-100 transition-all cursor-pointer   px-2  font-light justify-center items-center">
      <p>Tea & Coffee</p>
    </div>
  );
}
