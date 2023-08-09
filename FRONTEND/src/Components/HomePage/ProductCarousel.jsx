import React, { useRef } from "react";
import Product from "../Product";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

function ProductCarousel() {
  const containerRef = useRef();

  return (
    <div className=" w-full flex flex-col gap-4 mt-5">
      <div className=" flex justify-between">
        <h3 className=" text-2xl font-semibold">Rolling paper & tobacco</h3>
        <p className=" mr-2 md:m-0 text-xl text-green-700 cursor-pointer">
          see all
        </p>
      </div>
      <div className=" relative">
        <ScrollArrow
          containerRef={containerRef}
          side={"left"}
          icon={<MdKeyboardArrowLeft />}
        />
        <div
          ref={containerRef}
          className="hideScrollbar  overflow-scroll flex gap-4"
        >
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <ScrollArrow
          containerRef={containerRef}
          side={"right"}
          icon={<MdKeyboardArrowRight />}
        />
      </div>
    </div>
  );
}

export default ProductCarousel;

/* -------------------------------------------------------------------------- */
/*                                 SLIDE ARROW                                */
/* -------------------------------------------------------------------------- */

function ScrollArrow({ icon, side, containerRef }) {
  const onClickArrow = () => {
    const container = containerRef.current;

    if (side === "left") {
      container.scrollTo({
        behavior: "smooth",
        left: container.scrollLeft - container.clientWidth,
      });
    } else {
      container.scrollTo({
        behavior: "smooth",
        left: container.scrollLeft + container.clientWidth,
      });
    }
  };

  return (
    <p
      onClick={onClickArrow}
      className={` hidden md:block absolute top-[50%] -translate-y-[50%] ${
        side === "left" ? "left-0" : "right-0"
      }  bg-white  shadow-xl cursor-pointer hover:bg-gray-100  transition-all  rounded-full  p-3 z-10`}
    >
      {icon}
    </p>
  );
}
