import axios from "axios";
import { addToCart, setCart } from "../Reducer/cartSlice";
import { CART_ADD, CART_DELETE, CART_UPDATE } from "../../Api/endpoints";
import { toast } from "react-toastify";
import { setLoginComponent } from "../Reducer/headerLoginSlice";

export const addToCartAct = (id, quantity, setQuantity, setLoader) => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("blinkid_idToken");
      if (!localIdToken) {
        toast.error("To add in cart u have to login..");
        setLoader(false);
        dispatch(setLoginComponent());
        return;
      }

      const { data } = await axios.post(
        CART_ADD,
        {
          producttypeId: id,
          quantity,
        },
        {
          headers: {
            idToken: localIdToken,
          },
        }
      );

      console.log(data);

      dispatch(addToCart(data));
      setQuantity((p) => p + 1);
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
    setLoader(false);
  };
};

export const updateCartQuantityAct = (id, quantity, setQuantity, setLoader) => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("blinkid_idToken");
      if (!localIdToken) {
        toast.error("To add in cart u have to login..");
        setLoader(false);
        dispatch(setLoginComponent());
        return;
      }

      // If The Quantity is 0 then remove from cart
      if (quantity === 0) {
        const { data } = await axios.delete(`${CART_DELETE}/${id}`, {
          headers: {
            idToken: localIdToken,
          },
        });

        const newTotal = { quantity: 0, price: 0 };
        const newCartObj = delete { ...getState().cartSlice.cartObj }[
          data.producttypeId
        ];
        const newUpdatedCart = getState().cartSlice.cart.filter((item) => {
          if (item.producttypeId != data.producttypeId) {
            newTotal.price = item.price * item.quantity + newTotal.price;
            newTotal.quantity = newTotal.quantity + item.quantity;
            return true;
          }
        });

        // DISPATCHING NEW UPDATED CART
        dispatch(
          setCart({
            cart: newUpdatedCart,
            cartObj: newCartObj,
            total: newTotal,
          })
        );
      }
      // Else Update The Cart
      else {
        const { data } = await axios.post(
          CART_UPDATE,
          {
            producttypeId: id,
            quantity,
          },
          {
            headers: {
              idToken: localIdToken,
            },
          }
        );

        console.log(data);

        // FORMING NEW CARTOBJ CARTARRAY CARTTOTAL
        const newCartObj = {};
        const newTotal = { quantity: 0, price: 0 };
        const newUpdatedCart = getState().cartSlice.cart.map((item) => {
          if (item.producttypeId == data.producttypeId) {
            newTotal.price = +data.quantity * +data.price + newTotal.price;
            newTotal.quantity = newTotal.quantity + +data.quantity;
            newCartObj[item.producttypeId] = data;
            return data;
          }
          newTotal.price = newTotal.price + item.price * item.quantity;
          newTotal.quantity = newTotal.quantity + item.quantity;
          newCartObj[item.producttypeId] = item;
          return item;
        });

        // DISPATCHING NEW UPDATED CART
        dispatch(
          setCart({
            cart: newUpdatedCart,
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
