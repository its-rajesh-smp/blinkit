import React from "react";
import BlurWrapper from "../Wrapper & Cards/BlurWrapper";
import LoginForm from "./Form/LoginForm";
import useStopScroll from "../../Hooks/useStopScroll";

function Login() {
  useStopScroll();

  return (
    <BlurWrapper className=" flex justify-center items-center">
      <LoginForm />
    </BlurWrapper>
  );
}

export default Login;
