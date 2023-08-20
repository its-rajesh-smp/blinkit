import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoginComponent } from "../Store/Reducer/headerLoginSlice";

function useFetch(path, authentication, setLoader) {
  const [state, setState] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const headers = {};

      // IF NEEDS AUTHENTICATION
      if (authentication) {
        const localIdToken = localStorage.getItem("blinkid_idToken");
        if (!localIdToken) {
          toast.error("To Perform This Operation U Have To Login");
          dispatch(setLoginComponent());
          return;
        }
        headers.idToken = localIdToken;
      }

      const { data } = await axios.get(path, { headers: { ...headers } });
      setState(data);
      if (setLoader) {
        setLoader(false);
      }
    })();
  }, [path]);

  return state;
}

export default useFetch;
