import axios from "axios";
import { addToCart, setCart } from "../Reducer/cartSlice";
import { CART_ADD, CART_DELETE, CART_UPDATE } from "../../Api/endpoints";

export const addToCartAct = (id, quantity, setQuantity) => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("blinkid_idToken");
      if (!localIdToken) {
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

      dispatch(addToCart(data));
      setQuantity((p) => p + 1);
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateCartQuantityAct = (id, quantity, setQuantity) => {
  return async (dispatch, getState) => {
    try {
      const localIdToken = localStorage.getItem("blinkid_idToken");
      if (!localIdToken) {
        return;
      }

      // If The Quantity is 0 then remove from cart
      if (quantity === 0) {
        const { data } = await axios.delete(`${CART_DELETE}/${id}`, {
          headers: {
            idToken: localIdToken,
          },
        });

        const newUpdatedCart = getState().cartSlice.filter(
          (item) => item.id !== id
        );

        dispatch(setCart(newUpdatedCart));
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

        const newUpdatedCart = getState().cartSlice.map((item) => {
          if (item.id === id) {
            return data;
          }
          return item;
        });

        dispatch(setCart(newUpdatedCart));
      }
      setQuantity(quantity);
    } catch (error) {
      console.log(error);
    }
  };
};
