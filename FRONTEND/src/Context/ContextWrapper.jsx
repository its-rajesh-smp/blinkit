import React from "react";
import { HeaderProvider } from "./HeaderContext";

function ContextWrapper({ children }) {
  return (
    <>
      <HeaderProvider>{children}</HeaderProvider>
    </>
  );
}

export default ContextWrapper;
