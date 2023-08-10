import React from "react";

function InputButton({
  placeHolder,
  icon,
  className,
  onClick,
  loaderIcon,
  loader,
}) {
  return (
    <button
      disabled={loader}
      onClick={onClick}
      className={` ${className && className} ${
        !className.includes("w-") && "w-full"
      }  opacity-70 ${
        !loader && "hover:opacity-100"
      }  transition-all     font-semibold`}
    >
      {!loader && placeHolder} {!loader && icon}
      {loader && loaderIcon && loaderIcon}
    </button>
  );
}

export default InputButton;
