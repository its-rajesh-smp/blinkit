import React from "react";
import BlurWrapper from "../Wrapper & Cards/BlurWrapper";
import AddressForm from "./UI/AddressForm";
import AddressMap from "./UI/AddressMap";
import { useJsApiLoader } from "@react-google-maps/api";
import { GOOGLE_MAP_API_KEY } from "../../config";
const libraries = ["places"];

function MapAddressCard() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
    libraries: libraries,
  });

  //   WHEN MAP IS LOADING
  if (!isLoaded) {
    return <h1>GOOGLE MAP IS LOADING</h1>;
  }

  return (
    <BlurWrapper className="  flex justify-center items-center">
      <div className=" w-full md:w-[70%] lg:w-[60%] bg-white flex flex-col md:flex-row p-5 rounded-md gap-5  h-full md:h-96 ">
        <AddressForm />
        <AddressMap />
      </div>
    </BlurWrapper>
  );
}

function NewAddressCard() {
  if (!GOOGLE_MAP_API_KEY) {
    return (
      <BlurWrapper className="  flex justify-center items-center">
        <div className=" w-full md:w-[70%] lg:w-[60%] bg-white p-5 rounded-md">
          <AddressForm />
        </div>
      </BlurWrapper>
    );
  }

  return <MapAddressCard />;
}

export default NewAddressCard;
