import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCartAct,
  updateCartQuantityAct,
} from "../../Store/Actions/cartActions";
import Loader from "../UI/Loader";

function AddProductBTN({ id }) {
  const dispatch = useDispatch();
  const { cartObj } = useSelector((state) => state.cartSlice);
  const [loader, setLoader] = useState(false);
  const [quantity, setQuantity] = useState(
    cartObj[id] ? cartObj[id].quantity : 0
  );

  // If The Id Change We Have To Change The Quantity As Well
  useEffect(() => {
    setQuantity(cartObj[id] ? cartObj[id].quantity : 0);
  }, [id]);

  // ON CLICK ADD
  const onClickAddHandeler = async (e) => {
    e.stopPropagation();
    if (!loader) {
      setLoader(true);
      dispatch(addToCartAct(id, Number(quantity + 1), setQuantity, setLoader));
    }
  };

  // ON CLICK INCREAMENT
  const onClickIncreament = async (e) => {
    e.stopPropagation();
    if (!loader) {
      setLoader(true);
      dispatch(
        updateCartQuantityAct(
          id,
          Number(quantity + 1),
          setQuantity,
          setLoader,
          "INCREAMENT"
        )
      );
    }
  };

  // ON CLICK DECREAMENT
  const onClickDecreament = async (e) => {
    e.stopPropagation();
    if (!loader) {
      setLoader(true);
      dispatch(
        updateCartQuantityAct(id, Number(quantity - 1), setQuantity, setLoader)
      );
    }
  };

  return (
    <div
      className={` ${
        quantity === 0 || loader ? "justify-center" : "justify-between"
      } bg-green-100 border border-green-700 w-full md:w-20 flex   px-2 items-center  h-8 rounded-md font-semibold text-green-950  `}
    >
      {quantity !== 0 && !loader && (
        <button onClick={onClickDecreament}>-</button>
      )}
      <button disabled={quantity !== 0} onClick={onClickAddHandeler}>
        {!loader ? quantity !== 0 ? quantity : "ADD" : <Loader />}
      </button>
      {quantity !== 0 && !loader && (
        <button onClick={onClickIncreament}>+</button>
      )}
    </div>
  );
}

export default AddProductBTN;
