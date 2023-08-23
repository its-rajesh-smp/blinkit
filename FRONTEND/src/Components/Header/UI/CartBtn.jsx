import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLoginComponent } from "../../../Store/Reducer/headerLoginSlice";
import { toast } from "react-toastify";

function CartBtn() {
  const { total } = useSelector((state) => state.cartSlice);
  const { auth } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // CART BTN HANDELER
  const onClickCartBtn = () => {
    if (auth) {
      navigate("/cart");
    } else {
      toast.info("To open cart u have to login");
      dispatch(setLoginComponent());
    }
  };

  return (
    <div
      onClick={onClickCartBtn}
      className={` ${
        total.quantity === 0
          ? "hidden md:flex justify-center"
          : "justify-between"
      } row-start-2 cursor-pointer md:row-start-auto  flex bottom-10 left-2 right-2  fixed md:static  md:w-32 md:h-14  h-20  rounded-md  text-white px-4  items-center bg-green-500   gap-2`}
    >
      <div className="flex items-center gap-3">
        <div>
          <AiOutlineShoppingCart className=" text-2xl" />
        </div>
        {total.quantity !== 0 && (
          <div className="  font-bold leading-5">
            <p>{total.quantity} items</p>
            <p>${total.price}</p>
          </div>
        )}
      </div>
      <p className=" block md:hidden">View Cart</p>
    </div>
  );
}

export default CartBtn;
