import axios from "axios";
import { USER_GET, USER_LOGIN, USER_SIGNUP } from "../../Api/endpoints";
import { authUser } from "../Reducer/authSlice";

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

      const { data } = await axios.post(USER_GET, { idToken: localIdToken });

      dispatch(authUser(data));
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };
};

export const logoutUserAct = () => {
  return (dispatch, getState) => {};
};
