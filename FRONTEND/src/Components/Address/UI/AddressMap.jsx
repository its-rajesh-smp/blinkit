import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import findAddress from "../../../Hooks/findAddress";
import { useDispatch, useSelector } from "react-redux";
import { assignSelectAddress } from "../../../Store/Reducer/selectAddressSlice";

function AddressMap() {
  const dispatch = useDispatch();

  const { addressPosition } = useSelector((state) => state.selectAddressSlice);

  //   CHANGE MARKER POSITION ON CLICK MAP PLACE
  const onClickMapCreateMarker = async (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    const address = await findAddress(newMarker);
    dispatch(assignSelectAddress(address));
  };

  return (
    <div className=" w-full md:w-[60%] h-full bg-black">
      <GoogleMap
        center={addressPosition}
        zoom={15}
        options={{
          streetViewControl: false,
          fullscreenControl: false,
          clickableIcons: true,
        }}
        onClick={onClickMapCreateMarker}
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <Marker position={addressPosition} />
      </GoogleMap>
    </div>
  );
}

export default AddressMap;
