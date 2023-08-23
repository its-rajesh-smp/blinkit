import React, { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setSearchParam } from "../../../Store/Reducer/searchParamSlice";

const dynamicNames = ["egg", "ganja", "paan", "daaru"];
function HeaderSearch() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const timerRef = useRef();
  const { pathname } = useLocation();
  const [searchInput, setSearchInput] = useState("");
  const [isPageSearch, setIsPageSearch] = useState(false); //This state is used to check if we are in search page or not

  /* -------------------------------------------------------------------------- */
  /*              USE EFFECT TO UPDATE THE INPUT PLACEHOLDER's TEXT             */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    if (pathname == "/search") {
      clearInterval(timerRef.current);
      setIsPageSearch(true);
    } else {
      setIsPageSearch(false);
      timerRef.current = setInterval(() => {
        setIndex((p) => {
          if (p === dynamicNames.length - 1) {
            return 0;
          } else {
            return p + 1;
          }
        });
      }, 1000);
    }
    return () => {
      clearInterval(timerRef.current);
    };
  }, [pathname]);

  // On Div Click Navigate To Search Page
  const onDivClick = () => {
    navigate("/search");
  };

  /* -------------------------------------------------------------------------- */
  /*                                 DEBOUNCING                                 */
  /* -------------------------------------------------------------------------- */
  const debounceTimerRef = useRef();
  useEffect(() => {
    if (searchInput.trim() === "") {
      dispatch(setSearchParam(""));
      clearTimeout(debounceTimerRef.current);
    } else {
      debounceTimerRef.current = setTimeout(() => {
        dispatch(setSearchParam(searchInput));
      }, 1000);
    }

    return () => {
      clearTimeout(debounceTimerRef.current);
    };
  }, [searchInput]);

  return (
    <div
      onClick={onDivClick}
      className={` ${
        isPageSearch ? "shadow-lg" : "shadow-none"
      }   transition-all col-start-1 overflow-hidden col-span-5 md:col-auto md:col-start-auto w-full shrink rounded-md px-3 bg-gray-100 flex items-center`}
    >
      <AiOutlineSearch className="  text-2xl " />
      <input
        className=" outline-none transition-all w-full bg-gray-100 ml-3 px-2 h-12"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder={
          isPageSearch
            ? "Search for atta dal and more"
            : `Search '${dynamicNames[index]}'`
        }
      />
    </div>
  );
}

export default HeaderSearch;
