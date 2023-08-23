import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

function HeaderSearch() {
  const dynamicNames = ["egg", "ganja", "paan", "daaru"];
  const [index, setIndex] = useState(0);
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex((p) => {
        if (p === dynamicNames.length - 1) {
          return 0;
        } else {
          return p + 1;
        }
      });
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className=" col-start-1 overflow-hidden col-span-5 md:col-auto md:col-start-auto w-full shrink rounded-md px-3 bg-gray-100 flex items-center">
      <AiOutlineSearch className="  text-2xl " />
      <input
        disabled
        className=" transition-all w-full bg-gray-100 ml-3 h-12"
        type="text"
        placeholder={`Search '${dynamicNames[index]}'`}
      />
    </div>
  );
}

export default HeaderSearch;
