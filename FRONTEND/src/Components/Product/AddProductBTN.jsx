import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCartAct,
  updateCartQuantityAct,
} from "../../Store/Actions/cartActions";

function AddProductBTN({ id }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);

  const onClickAddHandeler = async (e) => {
    e.stopPropagation();
    dispatch(addToCartAct(id, quantity + 1, setQuantity));
  };

  const onClickIncreament = async (e) => {
    e.stopPropagation();
    dispatch(updateCartQuantityAct(id, quantity + 1, setQuantity));
  };

  const onClickDecreament = async (e) => {
    e.stopPropagation();
    dispatch(updateCartQuantityAct(id, quantity - 1, setQuantity));
  };

  return (
    <div
      className={` ${
        quantity === 0 ? "justify-center" : "justify-between"
      } bg-green-100 border border-green-700 w-full md:w-20 flex   px-2 items-center  h-8 rounded-md font-semibold text-green-950  `}
    >
      {quantity !== 0 && <button onClick={onClickDecreament}>-</button>}
      <button disabled={quantity !== 0} onClick={onClickAddHandeler}>
        {quantity !== 0 ? quantity : "ADD"}
      </button>
      {quantity !== 0 && <button onClick={onClickIncreament}>+</button>}
    </div>
  );
}

export default AddProductBTN;
