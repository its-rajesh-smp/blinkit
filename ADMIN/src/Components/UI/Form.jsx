import React from "react";

function Form({ children, className }) {
  return (
    <form
      className={` ${
        className && className
      } flex flex-col gap-4 p-5 bg-purple-300`}
    >
      {children}
    </form>
  );
}

export default Form;
