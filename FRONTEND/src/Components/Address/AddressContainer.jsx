import React from "react";
import AddNewAddress from "./UI/AddNewAddress";
import Address from "./UI/Address";
import NewAddressCard from "./NewAddressCard";

function AddressContainer({ className }) {
  return (
    <div className={`${className && className} flex flex-col gap-2`}>
      <AddNewAddress />
      <NewAddressCard />
      <Address />
      <Address />
    </div>
  );
}

export default AddressContainer;
