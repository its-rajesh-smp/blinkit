import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(path) {
  const [state, setState] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(path);
        if (data.length === 0) {
          setState([]);
        } else {
          setState(data);
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [path]);

  return [state, setState];
}

export default useFetch;
