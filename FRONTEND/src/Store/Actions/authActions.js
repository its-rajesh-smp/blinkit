import axios from "axios";
import { USER_GET, USER_LOGIN, USER_SIGNUP } from "../../Api/endpoints";
import { toast } from "react-toastify";
import { authUser, logoutUser } from "../Reducer/authSlice";
import { setCart } from "../Reducer/cartSlice";
import { setAllAddress } from "../Reducer/addressSlice";

export const createUserAct = (email, password, setLoader, closeBtnHandeler) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(USER_SIGNUP, { email, password });

      // Storing IdToken In Local Storage
      localStorage.setItem("blinkid_idToken", data.idToken);

      dispatch(authUser(data));
      closeBtnHandeler();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
    setLoader(false);
  };
};

export const loginUserAct = (email, password, setLoader, closeBtnHandeler) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.post(USER_LOGIN, { email, password });

      // Storing IdToken In Local Storage
      localStorage.setItem("blinkid_idToken", data.idToken);

      // Forming Cart
      const total = { quantity: 0, price: 0 };
      const cartObj = data.cartItems.reduce((prev, item) => {
        const obj = {
          producttypeId: item.producttypeId,
          quantity: item.quantity,
          price: item.producttype.price,
        };

        total.quantity = total.quantity + obj.quantity;
        total.price = total.price + obj.price * obj.quantity;

        return { ...prev, [obj.producttypeId]: obj };
      }, {});

      delete data.cartItems;


      dispatch(
        setAllAddress(
          data.addresses.map((address) => {
            return {
              ...address,
              addressPosition: JSON.parse(address.addressPosition),
            };
          })
        )
      );

      delete data.addresses;

      dispatch(setCart({ cartObj, total }));
      dispatch(authUser(data));
      closeBtnHandeler()
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
    setLoader(false);
  };
};

export const getUserAct = (setLoader) => {
  return async (dispatch, getState) => {
    try {
      // Getting LocalIdToken
      const localIdToken = localStorage.getItem("blinkid_idToken");

      if (!localIdToken) {
        setLoader(false);
        return;
      }

      // Getting User Details with Cart
      const { data } = await axios.post(USER_GET, { idToken: localIdToken });

      // Forming Cart
      const total = { quantity: 0, price: 0 };
      const cartObj = data.cartItems.reduce((prev, item) => {
        const obj = {
          producttypeId: item.producttypeId,
          quantity: item.quantity,
          price: item.producttype.price,
        };

        total.quantity = total.quantity + obj.quantity;
        total.price = total.price + obj.price * obj.quantity;

        return { ...prev, [obj.producttypeId]: obj };
      }, {});

      delete data.cartItems;


      dispatch(
        setAllAddress(
          data.addresses.map((address) => {
            return {
              ...address,
              addressPosition: JSON.parse(address.addressPosition),
            };
          })
        )
      );

      delete data.addresses;

      dispatch(setCart({ cartObj, total }));
      dispatch(authUser(data));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
    setLoader(false);
  };
};

export const logoutUserAct = () => {
  return (dispatch, getState) => {
    localStorage.removeItem('blinkid_idToken')
    dispatch(logoutUser())
  };
};
