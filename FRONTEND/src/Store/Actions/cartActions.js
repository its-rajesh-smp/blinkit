import axios from "axios";
import { addToCart, setCart } from "../Reducer/cartSlice";
import { CART_ADD, CART_DELETE, CART_UPDATE } from "../../Api/endpoints";
import { toast } from "react-toastify";
import { setLoginComponent } from "../Reducer/headerLoginSlice";

export const addToCartAct = (
  producttypeId,
  quantity,
  setQuantity,
  setLoader
) => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("blinkid_idToken");
      if (!localIdToken) {
        toast.error("To add in cart u have to login..");
        setLoader(false);
        dispatch(setLoginComponent());
        return;
      }

      // GETTING THE ADDED DATA
      const { data } = await axios.post(
        CART_ADD,
        {
          producttypeId,
          quantity,
        },
        {
          headers: {
            idToken: localIdToken,
          },
        }
      );

      dispatch(addToCart(data));
      setQuantity((p) => p + 1);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    setLoader(false);
  };
};

export const updateCartQuantityAct = (
  producttypeId,
  quantity,
  setQuantity,
  setLoader,
  operation
) => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("blinkid_idToken");
      if (!localIdToken) {
        toast.error("To add in cart u have to login..");
        setLoader(false);
        dispatch(setLoginComponent());
        return;
      }

      if (quantity === 0) {
        /* -------------------------------------------------------------------------- */
        /*                 If The Quantity is 0 then remove from cart                 */
        /* -------------------------------------------------------------------------- */
        const { data } = await axios.delete(`${CART_DELETE}/${producttypeId}`, {
          headers: {
            idToken: localIdToken,
          },
        });

        // Forming Cart
        const newTotal = { ...getState().cartSlice.total };
        newTotal.quantity = newTotal.quantity - 1;
        newTotal.price = newTotal.price - data.price;
        const newCartObj = delete { ...getState().cartSlice.cartObj }[
          data.producttypeId
        ];

        // DISPATCHING NEW UPDATED CART
        dispatch(setCart({ total: newTotal, cartObj: newCartObj }));
      } else {
        /* -------------------------------------------------------------------------- */
        /*                            Else Update The Cart                            */
        /* -------------------------------------------------------------------------- */
        const { data } = await axios.post(
          CART_UPDATE,
          {
            producttypeId,
            quantity,
          },
          {
            headers: {
              idToken: localIdToken,
            },
          }
        );

        // FORMING NEW CARTOBJ CARTARRAY CARTTOTAL
        const newTotal = { ...getState().cartSlice.total };
        if (operation === "INCREAMENT") {
          newTotal.quantity = newTotal.quantity + 1;
          newTotal.price = newTotal.price + data.price;
        } else {
          newTotal.quantity = newTotal.quantity - 1;
          newTotal.price = newTotal.price - data.price;
        }
        const newCartObj = { ...getState().cartSlice.cartObj };
        newCartObj[producttypeId] = data;

        // DISPATCHING NEW UPDATED CART
        dispatch(
          setCart({
            cartObj: newCartObj,
            total: newTotal,
          })
        );
      }
      setQuantity(quantity);
      setLoader(false);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
};
