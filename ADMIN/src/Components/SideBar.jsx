import React from "react";
import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <div className=" flex flex-col gap-4  bg-zinc-900 w-[20%] text-white  h-screen p-2">
      <NavLink to="/">Create Category</NavLink>
      <NavLink to="/sc">Create Sub Category</NavLink>
      <NavLink to="/cp">Create Product</NavLink>
      <NavLink to="/cpt">Create Product Type</NavLink>
    </div>
  );
}

export default SideBar;
