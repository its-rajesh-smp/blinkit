import React from "react";
import { useDispatch } from "react-redux";
import { setSearchParam } from "../../../Store/Reducer/searchParamSlice";

function HistoryParam({ name }) {
  const dispatch = useDispatch();

  // ON CLICK HISTORY SEARCH PRODUCT
  const onClickSearchHistory = () => {
    dispatch(setSearchParam(name));
  };

  return (
    <div
      onClick={onClickSearchHistory}
      className=" hover:bg-gray-100 transition-all cursor-pointer text-sm rounded-md  border-2  px-5 py-3"
    >
      {name}
    </div>
  );
}

export default HistoryParam;
