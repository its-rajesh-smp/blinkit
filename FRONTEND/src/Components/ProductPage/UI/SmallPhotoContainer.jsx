import React from "react";

function SmallPhotoContainer() {
  return (
    <div className="  hideScrollbar  mx-auto w-[70vw]  md:w-[25rem] overflow-scroll flex gap-5">
      <Image />
      <Image />
      <Image />
      <Image />
    </div>
  );
}
export default SmallPhotoContainer;

function Image() {
  return (
    <img
      className=" w-[70vw]  md:w-20 md:h-20 md:border rounded-xl"
      src="https://res.cloudinary.com/dcu6sympq/image/upload/v1683920213/grocery/fresh_vegetables/2_g4ecfh.webp"
      alt=""
    />
  );
}
