import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

function Loader({ className }) {
  return (
    <div>
      <BiLoaderCircle className={`${className && className} animate-spin`} />
    </div>
  );
}

export default Loader;
