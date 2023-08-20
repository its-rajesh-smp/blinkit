import React from "react";
import LoadingPage from "../UI/LoadingPage";

function PageWrapper({ className, children, loader }) {
  return !loader ? (
    <div
      className={`${
        className && className
      }  w-full lg:w-[85%]  mx-auto flex flex-col justify-center`}
    >
      {children}
    </div>
  ) : (
    <LoadingPage className=" h-[calc(100vh-10rem)]" />
  );
}

export default PageWrapper;
