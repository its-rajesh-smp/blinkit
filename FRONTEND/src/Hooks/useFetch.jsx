import React, { useEffect, useState } from "react";
import axios from "axios";

function useFetch(path) {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(path);
      setState(data);
    })();
  }, [path]);

  return state;
}

export default useFetch;
