import React from "react";
import Brand from "./UI/Brand";
import ShopSelector from "./UI/ShopSelector";
import HeaderSearch from "./UI/HeaderSearch";
import AccountSelect from "./UI/AccountSelect";
import CartBtn from "./UI/CartBtn";

function Header() {
  return (
    <header className="px-4 sticky top-0 z-20 bg-white  h-40 md:h-20 w-full justify-evenly md:gap-5  border-b grid grid-cols-header items-center">
      <Brand />
      <ShopSelector />
      <HeaderSearch />
      <AccountSelect />
      <CartBtn />
    </header>
  );
}

export default Header;
