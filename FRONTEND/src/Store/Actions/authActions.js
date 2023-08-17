import axios from "axios";
import { USER_GET, USER_LOGIN, USER_SIGNUP } from "../../Api/endpoints";
import { toast } from "react-toastify";
import { authUser } from "../Reducer/authSlice";
import { setCart } from "../Reducer/cartSlice";

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

      dispatch(authUser(data));
      closeBtnHandeler();
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
      const { cartItems } = data;
      const total = { quantity: 0, price: 0 };
      const cartObj = cartItems.reduce((prev, item) => {
        total.price = total.price + +item.producttype.price * item.quantity;
        total.quantity = total.quantity + item.quantity;
        item.price = +item.producttype.price;
        delete item.producttype;
        return { ...prev, [item.producttypeId]: item };
      }, {});

      dispatch(setCart({ cart: cartItems, total, cartObj }));

      dispatch(authUser(data));
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    }
    setLoader(false);
  };
};

export const logoutUserAct = () => {
  return (dispatch, getState) => {};
};
