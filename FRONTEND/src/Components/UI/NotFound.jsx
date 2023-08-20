import React from "react";
import { Link } from "react-router-dom";

function NotFound({ image, title, description, path, pathTitle, onClick }) {
  return (
    <div className=" flex flex-col gap-5 justify-center items-center">
      <img className=" w-96 h-96 object-cover" src={image} alt="" />
      <div className=" flex justify-center items-center flex-col">
        <p className="font-bold text-xl">{title}</p>
        <p className=" text-sm">{description}</p>
      </div>
      <Link
        onClick={onClick}
        className=" text-sm bg-green-400 px-2 py-2 rounded-sm"
        to={path}
      >
        {pathTitle}
      </Link>
    </div>
  );
}

export default NotFound;
