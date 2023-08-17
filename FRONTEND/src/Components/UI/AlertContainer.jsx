import React from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AlertContainer() {
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <ToastContainer />
        </>,
        document.getElementById("alertContainer")
      )}
    </>
  );
}

export default AlertContainer;
