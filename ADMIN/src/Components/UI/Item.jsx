import React from "react";

function Item({ data }) {
  return (
    <div className="  flex gap-4 w-fit bg-yellow-200  p-4">
      {/* {Object.values(data).map((value, index) => (
        <p className="shrink-0" key={index}>
          {value}
        </p>
      ))} */}
      {JSON.stringify(data)}
    </div>
  );
}

export default Item;
