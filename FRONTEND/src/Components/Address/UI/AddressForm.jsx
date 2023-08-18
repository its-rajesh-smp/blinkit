import React, { useState } from "react";
import InputText from "../../Input/InputText";
import InputButton from "../../Input/InputButton";
import { Autocomplete } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { onChange } from "../../../Store/Reducer/selectAddressSlice";

function AddressForm() {
  const [autoComplete, setAutoComplete] = useState(null);
  const { name, address, phoneNumber } = useSelector(
    (state) => state.selectAddressSlice
  );

  const dispatch = useDispatch();

  // ON CLICK SUGGESTION PLACE
  const handlePlaceSelect = (place) => {
    const location = place.geometry.location;
    const addressPos = { lat: location.lat(), lng: location.lng() };
    const payload = {
      address: place.formatted_address,
      addressPosition: addressPos,
    };
    dispatch(onChange(payload));
  };

  // ON CHANGE NAME
  const onChangeName = (value) => {
    dispatch(onChange({ name: value }));
  };
  // ON CHANGE NAME
  const onChangePhoneNumber = (value) => {
    dispatch(onChange({ phoneNumber: value }));
  };

  // On CHANGE ADDRESS
  const onChangeAddress = (e) => {
    const payload = {
      address: e.target.value,
      addressPosition: { lat: 0, lng: 0 },
    };
    dispatch(onChange(payload));
  };

  return (
    <div className=" w-full h-96  md:h-auto md:w-[40%]">
      <form
        autoComplete="off"
        className="  flex flex-col justify-between h-full"
      >
        <div className="flex flex-col gap-4">
          <h1 className=" font-bold text-2xl">Enter Your Delivery Location</h1>
          <InputText
            value={name}
            onChange={onChangeName}
            placeHolder="Name"
            className=" h-10"
          />
          <InputText
            value={phoneNumber}
            onChange={onChangePhoneNumber}
            placeHolder="Phone Number"
            className=" h-10"
          />
          <Autocomplete
            onLoad={(autoCom) => {
              setAutoComplete(autoCom);
            }}
            onPlaceChanged={() => {
              if (autoComplete) {
                const place = autoComplete.getPlace();
                handlePlaceSelect(place);
              }
            }}
          >
            <input
              placeholder="Full Address"
              className="h-full px-2 w-full"
              onChange={onChangeAddress}
              value={address}
              autoComplete="off"
            />
          </Autocomplete>
        </div>
        <div>
          <InputButton
            className="  bg-green-300 h-10"
            placeHolder="SAVE ADDRESS"
          />
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
