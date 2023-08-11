import React from "react";
import Loader from "./Loader";

function LoadingPage() {
  return (
    <div className=" flex justify-center items-center w-screen h-screen">
      <Loader className="  text-9xl text-green-400" />
    </div>
  );
}

export default LoadingPage;
