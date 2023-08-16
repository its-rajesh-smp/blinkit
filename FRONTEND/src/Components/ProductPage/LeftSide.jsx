import React, { useState } from "react";
import MainPhotoContainer from "./UI/MainPhotoContainer";
import SmallPhotoContainer from "./UI/SmallPhotoContainer";

function LeftSide() {
  const [mainImage, setMainImage] = useState(0);

  return (
    <div className=" flex flex-col gap-4 w-full md:border-r">
      <MainPhotoContainer mainImage={mainImage} />
      <SmallPhotoContainer mainImage={mainImage} setMainImage={setMainImage} />
    </div>
  );
}

export default LeftSide;
