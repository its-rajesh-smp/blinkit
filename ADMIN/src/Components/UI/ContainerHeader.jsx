import React from "react";

function ContainerHeader({ header }) {
  return (
    <div className=" bg-gray-400 flex p-4 gap-4">
      {header.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
}

export default ContainerHeader;
