import axios from "axios";
import { ADDRESS, ADDRESS_CREATE } from "../../Api/endpoints";
import { setLoginComponent } from "../Reducer/headerLoginSlice";
import { addNewAddress, setAllAddress } from "../Reducer/addressSlice";
import { hideAddressForm } from "../Reducer/selectAddressSlice";

export const createAddressAct = (addressData) => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("blinkid_idToken");
      if (!localIdToken) {
        toast.error("To add in cart u have to login..");
        setLoader(false);
        dispatch(setLoginComponent());
        return;
      }

      // GETTING THE ADDED DATA
      const { data } = await axios.post(ADDRESS_CREATE, addressData, {
        headers: {
          idToken: localIdToken,
        },
      });

      // As We cannot Store Object so we will get as string here i am parsing the string to object
      data.addressPosition = JSON.parse(data.addressPosition);

      // ADDING NEW ADDRESS, CLEARING SELECTED ADDRESS, HIDING THE FORM
      dispatch(addNewAddress(data));
      dispatch(hideAddressForm());
    } catch (error) {
      console.log(error);
    }
  };
};

export const editAddressAct = (addressData, id) => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("blinkid_idToken");
      if (!localIdToken) {
        toast.error("To add in cart u have to login..");
        setLoader(false);
        dispatch(setLoginComponent());
        return;
      }

      // GETTING THE ADDED DATA
      const { data } = await axios.patch(`${ADDRESS}/${id}`, addressData, {
        headers: {
          idToken: localIdToken,
        },
      });

      // Creating Updated Array
      const updatedAddressArray = [...getState().addressSlice.allAddress].map(
        (address) => {
          if (address.id == id) {
            // As We cannot Store Object so we will get as string here i am parsing the string to object
            data.addressPosition = JSON.parse(data.addressPosition);
            return data;
          }
          return address;
        }
      );

      // UPDATING ADDRESS, CLEARING SELECTED ADDRESS, HIDING THE FORM
      dispatch(setAllAddress(updatedAddressArray));
      dispatch(hideAddressForm());
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteAddressAct = (id) => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("blinkid_idToken");
      if (!localIdToken) {
        toast.error("To add in cart u have to login..");
        setLoader(false);
        dispatch(setLoginComponent());
        return;
      }

      // DELETING FROM DATABASE
      await axios.delete(`${ADDRESS}/${id}`, {
        headers: {
          idToken: localIdToken,
        },
      });

      // Creating Updated Array
      const updatedAddressArray = [
        ...getState().addressSlice.allAddress,
      ].filter((address) => {
        if (address.id !== id) {
          return true;
        }
      });

      // Deleting Address From UI by updating the allAddress Array
      dispatch(setAllAddress(updatedAddressArray));
    } catch (error) {
      console.log(error);
    }
  };
};
