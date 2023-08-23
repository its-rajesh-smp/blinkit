import React, { useContext } from "react";
import Type from "./Type";
import ProductDetailsContext from "../../../Context/ProductDetailsPageContext";

function TypesContainer() {
  const { producttypes } = useContext(ProductDetailsContext);

  return (
    producttypes && (
      <div className=" mt-10">
        <p className=" text-sm px-1 py-2 ">Select Unit</p>
        <div className=" flex flex-col gap-4 ">
          {producttypes.map((option) => (
            <Type
              name={option.name}
              key={option.id}
              price={option.price}
              id={option.id}
              discount={option.discount}
              stock={option.stock}
            />
          ))}
        </div>
      </div>
    )
  );
}

export default TypesContainer;
