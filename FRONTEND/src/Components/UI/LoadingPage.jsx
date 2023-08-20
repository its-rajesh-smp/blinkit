import React from "react";
import Loader from "./Loader";

function LoadingPage({ className }) {
  return (
    <div
      className={`${className && className} flex justify-center  items-center `}
    >
      <Loader className="  text-9xl text-green-400" />
    </div>
  );
}

export default LoadingPage;
