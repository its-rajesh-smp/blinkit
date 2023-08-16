import React, { useContext } from "react";
import ProductDetailsContext from "../../../Context/ProductDetailsPageContext";

function SmallPhotoContainer({ setMainImage, mainImage }) {
  const { images } = useContext(ProductDetailsContext);

  function setMainImageHandeler(index) {
    setMainImage(index);
  }

  return (
    <div className="  hideScrollbar  mx-auto w-[70vw]  md:w-[25rem] overflow-scroll flex gap-5">
      {images &&
        images.map((url, index) => (
          <Image
            mainImage={mainImage}
            setMainImageHandeler={setMainImageHandeler}
            index={index}
            key={index}
            url={url}
          />
        ))}
    </div>
  );
}
export default SmallPhotoContainer;

function Image({ url, mainImage, setMainImageHandeler, index }) {
  return (
    <img
      onClick={() => setMainImageHandeler(index)}
      className={` ${
        mainImage == index ? "md:border-2 border-green-600 " : "md:border "
      }  w-[70vw] transition-all  md:w-20 md:h-20  rounded-xl`}
      src={url}
      alt=""
    />
  );
}
