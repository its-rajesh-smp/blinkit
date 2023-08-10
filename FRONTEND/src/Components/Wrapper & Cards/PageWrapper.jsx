import React from "react";

function PageWrapper({ className, children }) {
  return (
    <div
      className={`${
        className && className
      }  w-full lg:w-[80%]  mx-auto flex flex-col justify-center`}
    >
      {children}
    </div>
  );
}

export default PageWrapper;
