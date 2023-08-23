import React, { useContext } from "react";
import SearchHistoryContext from "../../Context/SearchHistoryContext";
import HistoryParam from "./UI/HistoryParam";
import { AiOutlineClear, AiOutlineHistory } from "react-icons/ai";

function SearchHistory() {
  const { searchHistory, clearSearchHistory } =
    useContext(SearchHistoryContext);

  return (
    searchHistory.length > 0 && (
      <div className=" flex-col flex gap-5">
        <div className="text-xl flex justify-between items-center">
          <div className=" flex items-center gap-2">
            <AiOutlineHistory />
            <p className="font-medium mb-1">Recent searches</p>
          </div>
          <AiOutlineClear
            className=" cursor-pointer"
            onClick={clearSearchHistory}
          />
        </div>
        <div className="hideScrollbar overflow-scroll flex gap-5">
          {searchHistory.map((history) => {
            return <HistoryParam name={history} key={Math.random()} />;
          })}
        </div>
      </div>
    )
  );
}

export default SearchHistory;
