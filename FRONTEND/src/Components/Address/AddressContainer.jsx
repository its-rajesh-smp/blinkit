import React from "react";
import AddNewAddress from "./UI/AddNewAddress";
import Address from "./UI/Address";
import NewAddressCard from "./NewAddressCard";
import { useSelector } from "react-redux";
import NoAddressPresent from "./UI/NoAddressPresent";

function AddressContainer({ className }) {
  const { allAddress } = useSelector((state) => state.addressSlice);
  const { addressForm } = useSelector((state) => state.selectAddressSlice);

  return (
    <div className={`${className && className} flex flex-col gap-2`}>
      {addressForm && <NewAddressCard />}
      {allAddress.length > 0 ? (
        <>
          <AddNewAddress />
          {allAddress.map((address) => (
            <Address key={address.id} data={address} />
          ))}
        </>
      ) : (
        <>
          <NoAddressPresent />
        </>
      )}
    </div>
  );
}

export default AddressContainer;
