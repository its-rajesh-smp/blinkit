import React from "react";
import AddNewAddress from "./UI/AddNewAddress";
import Address from "./UI/Address";

function AddressContainer({ className }) {
  return (
    <div className={`${className && className} flex flex-col gap-2`}>
      <AddNewAddress />
      <Address />
      <Address />
    </div>
  );
}

export default AddressContainer;
