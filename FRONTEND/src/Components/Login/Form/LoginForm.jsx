import React, { useContext, useState } from "react";
import InputText from "../../Input/InputText";
import InputButton from "../../Input/InputButton";
import Loader from "../../UI/Loader";
import { MdClose } from "react-icons/md";

import { useDispatch } from "react-redux";
import {
  createUserAct,
  loginUserAct,
} from "../../../Store/Actions/authActions";
import { hideLoginComponent } from "../../../Store/Reducer/headerLoginSlice";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginForm, switchLoginForm] = useState(true);
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();

  /* -------------------------------------------------------------------------- */
  /*                              ON CLICK HANDELER                             */
  /* -------------------------------------------------------------------------- */
  const onClickHandeler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    setLoader(true);
    loginForm
      ? dispatch(loginUserAct(email, password, setLoader, closeBtnHandeler))
      : dispatch(createUserAct(email, password, setLoader, closeBtnHandeler));
  };

  /* -------------------------------------------------------------------------- */
  /*                            ON CLICK SWITCH FORM                            */
  /* -------------------------------------------------------------------------- */
  const switchFormHandeler = () => {
    switchLoginForm((p) => !p);
  };

  /* -------------------------------------------------------------------------- */
  /*                               ON CLICK GUEST                               */
  /* -------------------------------------------------------------------------- */
  const onClickGuestHandeler = () => {};

  /* -------------------------------------------------------------------------- */
  /*                             ON CLICK CLOSE BTN                             */
  /* -------------------------------------------------------------------------- */
  function closeBtnHandeler() {
    dispatch(hideLoginComponent());
  }

  return (
    <div className="  select-none bg-white  w-full h-full md:w-[60%] md:h-[60%] lg:w-[40%] lg:h-[50%] md:rounded-3xl flex items-center  flex-col">
      <div className=" relative shadow-sm h-20 bg-gray-100 w-full md:rounded-t-2xl flex justify-center items-center">
        <p className="font-bold  text-4xl md:text-2xl">
          Enter Your Credentials
        </p>
        <MdClose
          onClick={closeBtnHandeler}
          className=" hidden md:block text-4xl cursor-pointer hover:text-gray-600 transition-all  absolute  right-5"
        />
      </div>
      <form className="p-2 gap-4 flex flex-col w-[80%] md:w-2/4 items-center">
        <p className="  text-2xl md:text-sm">
          {loginForm ? "Login" : "Create New Account"}
        </p>

        <div className=" flex flex-col gap-5  w-full">
          <InputText
            value={email}
            onChange={setEmail}
            placeHolder="Enter Email"
            className=" w-full h-16 md:h-10"
          />
          <InputText
            value={password}
            onChange={setPassword}
            placeHolder="Enter Password"
            className="h-16 md:h-10"
          />
        </div>
        <InputButton
          loader={loader}
          loaderIcon={<Loader />}
          onClick={onClickHandeler}
          className=" bg-zinc-400 h-16 md:h-10 flex justify-center items-center  text-white"
          placeHolder={loginForm ? "Login" : "Create New Account"}
        />
        <p
          onClick={switchFormHandeler}
          className=" md:text-sm  font-medium text-green-600 underline cursor-pointer"
        >
          {loginForm ? "Create New Account" : "Already Have Account"}
        </p>
        <p
          onClick={onClickGuestHandeler}
          className="  md:text-xs font-medium text-gray-400 cursor-pointer"
        >
          Login As Guest
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
