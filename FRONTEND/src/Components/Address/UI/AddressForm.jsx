import React, { useState } from "react";
import InputText from "../../Input/InputText";
import InputButton from "../../Input/InputButton";
import { Autocomplete } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import {
  hideAddressForm,
  assignSelectAddress,
} from "../../../Store/Reducer/selectAddressSlice";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  createAddressAct,
  editAddressAct,
} from "../../../Store/Actions/addressActions";

function AddressForm() {
  const [autoComplete, setAutoComplete] = useState(null);
  const { name, id, operation, address, phoneNumber, addressPosition } =
    useSelector((state) => state.selectAddressSlice);

  const dispatch = useDispatch();

  // ON CLICK SUGGESTION PLACE
  const handlePlaceSelect = (place) => {
    const location = place.geometry.location;
    const addressPos = { lat: location.lat(), lng: location.lng() };
    const payload = {
      address: place.formatted_address,
      addressPosition: addressPos,
    };
    dispatch(assignSelectAddress(payload));
  };

  // ON CHANGE NAME
  const onChangeName = (value) => {
    dispatch(assignSelectAddress({ name: value }));
  };
  // ON CHANGE NAME
  const onChangePhoneNumber = (value) => {
    dispatch(assignSelectAddress({ phoneNumber: value }));
  };

  // On CHANGE ADDRESS
  const onChangeAddress = (e) => {
    const payload = {
      address: e.target.value,
      addressPosition: { lat: 0, lng: 0 },
    };
    dispatch(assignSelectAddress(payload));
  };

  // On Click Close Btn
  const onClickCloseHandeler = (e) => {
    e.preventDefault();
    dispatch(hideAddressForm());
  };

  // On Click Submit Handeler
  const onClickSubmitHandeler = (e) => {
    e.preventDefault();
    const payload = {
      name,
      phoneNumber,
      address,
      addressPosition: JSON.stringify(addressPosition),
    };
    operation === "EDIT"
      ? dispatch(editAddressAct(payload, id))
      : dispatch(createAddressAct(payload));
  };

  return (
    <div className=" w-full h-96  md:h-auto md:w-[40%]">
      <form
        autoComplete="off"
        className="  flex flex-col justify-between h-full"
      >
        <div className="flex flex-col gap-4">
          <div className=" flex justify-between items-center">
            <h1 className=" font-bold text-xl">
              {operation === "EDIT" ? "Edit" : "Enter"} Your Delivery Location{" "}
            </h1>
            <button
              onClick={onClickCloseHandeler}
              className=" flex justify-center items-center  hover:text-red-600 transition-all text-red-400 text-2xl"
            >
              <AiOutlineCloseCircle />
            </button>
          </div>
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
          <p className=" py-2 text-center text-xs">
            Choose nearest avalable location on goole earth
          </p>
          <InputButton
            onClick={onClickSubmitHandeler}
            className="  bg-green-300 h-10"
            placeHolder={`${operation === "EDIT" ? "EDIT" : "SAVE"} ADDRESS`}
          />
        </div>
      </form>
    </div>
  );
}

export default AddressForm;
