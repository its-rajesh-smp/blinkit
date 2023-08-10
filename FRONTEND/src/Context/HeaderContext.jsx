import React, { useState } from "react";

const HeaderContext = React.createContext({});
export default HeaderContext;

function HeaderProvider({ children }) {
  const [loginComponent, setLoginComponent] = useState(false);

  /* -------------------------------------------------------------------------- */
  /*                          ON CLICK HEADER LOGIN BTN                         */
  /* -------------------------------------------------------------------------- */
  const setLoginComponentHandeler = () => {
    setLoginComponent((p) => !p);
  };

  return (
    <HeaderContext.Provider
      value={{ setLoginComponentHandeler, loginComponent }}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export { HeaderProvider };
