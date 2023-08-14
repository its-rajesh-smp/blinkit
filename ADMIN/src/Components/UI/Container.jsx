import React from "react";
import ContainerHeader from "./ContainerHeader";
import Item from "./Item";

function Container({ list, className }) {
  return (
    (list && list.length) > 0 && (
      <div
        className={`${
          className && className
        } flex flex-col overflow-scroll gap-4`}
      >
        {/* <ContainerHeader header={Object.keys(list[0])} /> */}

        {list.map((item) => (
          <Item key={Math.random()} data={item} />
        ))}
      </div>
    )
  );
}

export default Container;
