import React, { useContext } from "react";
import ProductDetailsContext from "../../../Context/ProductDetailsPageContext";

function MainPhotoContainer({ mainImage }) {
  const { images } = useContext(ProductDetailsContext);

  return (
    images && (
      <div className=" hidden  overflow-hidden md:block mx-auto transition-all hover:shadow-xl w-[25rem] h-[25rem] ">
        <img
          className="w-full h-full hover:scale-150 transition-all object-cover object-center"
          src={images[mainImage]}
          alt="main product image"
        />
      </div>
    )
  );
}

export default MainPhotoContainer;
