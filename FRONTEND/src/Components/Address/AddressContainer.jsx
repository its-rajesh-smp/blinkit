import React from "react";
import AddNewAddress from "./UI/AddNewAddress";
import Address from "./UI/Address";
import NewAddressCard from "./NewAddressCard";
import { useDispatch, useSelector } from "react-redux";
import NotFound from "../UI/NotFound";
import { showAddressForm } from "../../Store/Reducer/selectAddressSlice";

function AddressContainer({ className }) {
  const { allAddress } = useSelector((state) => state.addressSlice);
  const { addressForm } = useSelector((state) => state.selectAddressSlice);

  const dispatch = useDispatch();

  // On CLICK  ADD NEW ADDRESS BTN OPEN ADDRESS FORM
  const onAddBtnClick = () => {
    dispatch(showAddressForm());
  };

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
          <NotFound
            image="https://grossy-app.vercel.app/images/no_address.webp"
            title="No address present"
            description="Tell us where you want your orders delivered"
            pathTitle="ADD NEW ADDRESS"
            path=""
            onClick={onAddBtnClick}
          />
        </>
      )}
    </div>
  );
}

export default AddressContainer;
