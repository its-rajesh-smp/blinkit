import React from "react";
import { Link } from "react-router-dom";

function TopBanner() {
  return (
    <div className=" w-full ">
      <Link to="/pl/7/7">
        <img
          className="w-full"
          src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=1440/layout-engine/2022-05/Group-33704.jpg"
          alt=""
        />
      </Link>
    </div>
  );
}

export default TopBanner;
