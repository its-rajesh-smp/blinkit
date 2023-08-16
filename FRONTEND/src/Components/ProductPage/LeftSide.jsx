import React from "react";
import MainPhotoContainer from "./UI/MainPhotoContainer";
import SmallPhotoContainer from "./UI/SmallPhotoContainer";

function LeftSide() {
  return (
    <div className=" flex flex-col gap-4 w-full md:border-r">
      <MainPhotoContainer />
      <SmallPhotoContainer />
    </div>
  );
}

export default LeftSide;
