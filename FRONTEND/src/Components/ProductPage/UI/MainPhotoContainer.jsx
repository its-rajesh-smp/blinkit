import React from "react";

function MainPhotoContainer() {
  return (
    <div className=" hidden md:block mx-auto w-[25rem] h-[25rem] border">
      <img
        className="w-full h-full object-cover object-center"
        src="https://res.cloudinary.com/dcu6sympq/image/upload/v1683920213/grocery/fresh_vegetables/2_g4ecfh.webp"
        alt=""
      />
    </div>
  );
}

export default MainPhotoContainer;
