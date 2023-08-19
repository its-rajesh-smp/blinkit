import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiTick } from "react-icons/ti";
import { assignSelectAddress } from "../../../Store/Reducer/selectAddressSlice";
import { deleteAddressAct } from "../../../Store/Actions/addressActions";
import { selectAddress } from "../../../Store/Reducer/addressSlice";

function Address({ data }) {
  const { selectedAddress } = useSelector((state) => state.addressSlice);
  const isSelected = data.id === selectedAddress.id;
  const dispatch = useDispatch();

  // ON CLICK EDIT ADDRESS BTN
  const onClickEditHandeler = () => {
    dispatch(
      assignSelectAddress({ ...data, addressForm: true, operation: "EDIT" })
    );
  };

  // ON CLICK DELETE ADDRESS BTN
  const onClickDeleteHandeler = () => {
    dispatch(deleteAddressAct(data.id));
  };

  return (
    <div
      className={`${
        isSelected ? "bg-green-200" : "bg-white"
      } p-5 border transition-all flex justify-between items-center`}
    >
      <div className="text-xs flex flex-col gap-1">
        <p className=" font-bold">{data.name}</p>
        <p>{data.address}</p>
        <div className="flex gap-5">
          <button onClick={onClickEditHandeler} className=" text-green-600">
            Edit
          </button>
          <button onClick={onClickDeleteHandeler} className=" text-red-600">
            Delete
          </button>
        </div>
      </div>
      <div>
        <SelectBtn data={data} isSelected={isSelected} />
      </div>
    </div>
  );
}

export default Address;

function SelectBtn({ isSelected, data }) {
  const dispatch = useDispatch();

  // On Click Select Box
  const onClickHandeler = () => {
    if (!isSelected) {
      dispatch(selectAddress(data));
    } else {
      dispatch(selectAddress({}));
    }
  };

  return (
    <div
      onClick={onClickHandeler}
      className={`${
        isSelected && "border-gray-700"
      } flex cursor-pointer transition-all justify-center items-center w-10 h-10 border`}
    >
      {isSelected && <TiTick className=" text-2xl" />}
    </div>
  );
}
