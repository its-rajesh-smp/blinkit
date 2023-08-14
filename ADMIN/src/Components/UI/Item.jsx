import React from "react";

function Item({ data }) {
  return (
    <div className=" flex gap-4 bg-yellow-200  p-4">
      {Object.values(data).map((value, index) => (
        <p key={index}>{value}</p>
      ))}
    </div>
  );
}

export default Item;
