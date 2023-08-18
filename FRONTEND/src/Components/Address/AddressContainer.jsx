import React, { useState } from "react";
import AddNewAddress from "./UI/AddNewAddress";
import Address from "./UI/Address";
import NewAddressCard from "./NewAddressCard";
import { useSelector } from "react-redux";

function AddressContainer({ className }) {
  const { allAddress } = useSelector((state) => state.addressSlice);
  const { addressForm } = useSelector((state) => state.selectAddressSlice);

  return (
    <div className={`${className && className} flex flex-col gap-2`}>
      <AddNewAddress />
      {addressForm && <NewAddressCard />}
      {allAddress.map((address) => (
        <Address key={address.id} data={address} />
      ))}
    </div>
  );
}

export default AddressContainer;
