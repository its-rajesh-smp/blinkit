import React, { useRef } from "react";
import Product from "../Product/Product";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import useFetch from "../../Hooks/useFetch";
import { PRODUCT } from "../../Api/endpoints";
import { useNavigate } from "react-router-dom";

function ProductCarousel({ mainCategoryId, title, firstSubCategoryId }) {
  const containerRef = useRef();
  const navigate = useNavigate();
  const productLists = useFetch(`${PRODUCT}/${mainCategoryId}`);

  /* -------------------------------------------------------------------------- */
  /*                              ON CLICK SEE ALL                              */
  /* -------------------------------------------------------------------------- */
  const onClickSeeAllHandeler = () => {
    navigate(`/pl/${mainCategoryId}/${firstSubCategoryId}`);
  };

  return (
    productLists && (
      <div className=" w-full flex flex-col gap-4 mt-5">
        <div className=" flex justify-between">
          <h3 className=" text-2xl font-semibold">{title}</h3>
          <p
            onClick={onClickSeeAllHandeler}
            className=" mr-2 md:m-0 text-xl text-green-700 cursor-pointer"
          >
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
            {productLists.map((product) => (
              <Product key={product.id} data={product} className="w-48 " />
            ))}
          </div>
          <ScrollArrow
            containerRef={containerRef}
            side={"right"}
            icon={<MdKeyboardArrowRight />}
          />
        </div>
      </div>
    )
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
      className={` hidden z-20 md:block absolute top-[60%] -translate-y-[50%] ${
        side === "left" ? "-left-5" : "-right-5"
      }  bg-white  shadow-xl cursor-pointer hover:bg-gray-100  transition-all  rounded-full  p-3 z-10`}
    >
      {icon}
    </p>
  );
}
