import React from "react";

function OrderItemDetails({ quantity, producttype }) {
  return (
    <div className=" shrink-0 flex items-center ml-5  gap-10">
      <img
        className=" w-20 h-20 object-cover"
        src={JSON.parse(producttype.product.images)[0]}
        alt=""
      />
      <div className=" p-1 md:py-5">
        <p>{producttype.product.name}</p>
        <p>{producttype.name}</p>
        <p>
          Total: {producttype.price} x {quantity} ={" "}
          {producttype.price * quantity}
        </p>
      </div>
    </div>
  );
}

export default OrderItemDetails;
