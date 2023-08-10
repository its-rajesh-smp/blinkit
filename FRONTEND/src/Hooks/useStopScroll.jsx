import { useEffect } from "react";

function useStopScroll() {
  useEffect(() => {
    document.querySelector("body").classList.add("useStopScroll");

    return () => {
      document.querySelector("body").classList.remove("useStopScroll");
    };
  }, []);
}

export default useStopScroll;
