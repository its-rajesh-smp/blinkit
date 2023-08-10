import React from "react";
import { Link } from "react-router-dom";

function Brand() {
  return (
    <Link to="/">
      <div className="  hidden md:flex border-r  w-40 h-full  justify-center items-center cursor-pointer">
        <h1 className=" text-4xl  font-bold">
          <span className=" text-yellow-400 ">blink</span>
          <span className="text-green-500">it</span>
        </h1>
      </div>
    </Link>
  );
}

export default Brand;
