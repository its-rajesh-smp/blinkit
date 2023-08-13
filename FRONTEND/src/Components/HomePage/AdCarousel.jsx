import React from "react";
import AdCard from "./UI/AdCard";
import useFetch from "../../Hooks/useFetch";
import { CAOUSEL_AD_GET } from "../../Api/endpoints";

function AdCarousel() {
  const adLists = useFetch(CAOUSEL_AD_GET);

  return (
    <div className=" box-border hideScrollbar mx-auto w-full  gap-2 md:gap-5 overflow-scroll  flex">
      {adLists &&
        adLists.map((ad) => (
          <AdCard key={ad.id} image={ad.image} path={ad.path} />
        ))}
    </div>
  );
}

export default AdCarousel;
