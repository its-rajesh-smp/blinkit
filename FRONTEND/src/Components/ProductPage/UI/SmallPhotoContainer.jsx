import React, { useContext } from "react";
import ProductDetailsContext from "../../../Context/ProductDetailsPageContext";

function SmallPhotoContainer() {
  const { images } = useContext(ProductDetailsContext);

  return (
    <div className="  hideScrollbar  mx-auto w-[70vw]  md:w-[25rem] overflow-scroll flex gap-5">
      {images && images.map((url) => <Image key={url} url={url} />)}
    </div>
  );
}
export default SmallPhotoContainer;

function Image({ url }) {
  return (
    <img
      className=" w-[70vw]  md:w-20 md:h-20 md:border rounded-xl"
      src={url}
      alt=""
    />
  );
}
