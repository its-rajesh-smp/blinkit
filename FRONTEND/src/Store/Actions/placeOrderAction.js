import { RZP_KEY_ID } from "../../../cred";
import { ORDER_CREATE, ORDER_FAILED, ORDER_SUCCESS } from "../../Api/endpoints";
import axios from "axios";
import { clearCart } from "../Reducer/cartSlice";
import { toast } from "react-toastify";
import { clearSelectedAddress } from "../Reducer/addressSlice";

export const placeOrderAct = () => {
  return async (dispatch, getState) => {
    try {
      const selectedAddressId = getState().addressSlice.selectedAddress.id;

      // Getting LocalIdToken
      const localIdToken = localStorage.getItem("blinkid_idToken");

      if (!localIdToken) {
        // setLoader(false);
        return;
      }

      // GETTING THE ADDED DATA
      const { data } = await axios.post(
        ORDER_CREATE,
        { addressId: selectedAddressId },
        {
          headers: {
            idToken: localIdToken,
          },
        }
      );

      // FUNCTION TO CLEAR CART ITEMS
      function clearCartItemsAfterPaymentSuccess() {
        toast.success("Order Placed");
        dispatch(clearCart());
        dispatch(clearSelectedAddress());
      }

      // RAZORYPAY OPTIONS
      const options = {
        key: RZP_KEY_ID,
        order_id: data.id,
        name: "blinkit.com",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Blinkit-yellow-rounded.svg/1200px-Blinkit-yellow-rounded.svg.png",
        theme: {
          color: "#F1C40F",
        },
        handler: (resopnse) =>
          onPaymentSuccess(
            resopnse,
            localIdToken,
            selectedAddressId,
            clearCartItemsAfterPaymentSuccess
          ),
      };

      // RAZORPAY INSTANCE
      var rzp1 = new Razorpay(options);

      // IF PAYMENT FAILED
      rzp1.on("payment.failed", (response) =>
        onPaymentFailed(response, localIdToken, data.id)
      );

      // SHOWING PAYMENT MODAL
      rzp1.open();
    } catch (error) {
      console.log(error);
    }
  };
};

/* -------------------------------------------------------------------------- */
/*                             ON PAYMENT SUCCESS                             */
/* -------------------------------------------------------------------------- */
async function onPaymentSuccess(
  resopnse,
  idToken,
  selectedAddressId,
  clearCartItemsAfterPaymentSuccess
) {
  try {
    const { data } = await axios.post(
      ORDER_SUCCESS,
      {
        addressId: selectedAddressId,
        paymentOrderId: resopnse.razorpay_order_id,
        paymentId: resopnse.razorpay_payment_id,
      },
      {
        headers: {
          idToken,
        },
      }
    );

    console.log(data);
    clearCartItemsAfterPaymentSuccess();
  } catch (error) {
    console.log(error);
  }
}

/* -------------------------------------------------------------------------- */
/*                              ON PAYMENT FAILED                             */
/* -------------------------------------------------------------------------- */
async function onPaymentFailed(response, localIdToken, paymentOrderId) {
  try {
    const { data } = await axios.post(
      ORDER_FAILED,
      {
        paymentOrderId,
        status: response.error.description,
      },
      {
        headers: {
          idToken: localIdToken,
        },
      }
    );

    console.log(data);
    toast.error(response.error.description);
  } catch (error) {
    console.log(error);
  }
}
