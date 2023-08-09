import React from "react";

function PageWrapper({ className, children }) {
  return (
    <div
      className={`${
        className && className
      } p-2 w-full  lg:w-[80%] gap-4 mx-auto flex flex-col justify-center`}
    >
      {children}
    </div>
  );
}

export default PageWrapper;
