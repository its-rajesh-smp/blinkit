import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearSearchParam } from "../Store/Reducer/searchParamSlice";

const SearchHistoryContext = React.createContext({
  searchHistory: [],
  setSearchHistoryHandeler: () => {},
  clearSearchHistory: () => {},
});

const SearchHistoryProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [searchHistory, setSearchHistory] = useState(
    localStorage.getItem("blinkit_search")
      ? JSON.parse(localStorage.getItem("blinkit_search"))
      : []
  );

  /* -------------------------------------------------------------------------- */
  /*                           SETTING SEARCH HISTORY                           */
  /* -------------------------------------------------------------------------- */
  const setSearchHistoryHandeler = (searchParam) => {
    const updatedSearchHistory = searchHistory.filter(
      (history) => history !== searchParam
    );

    localStorage.setItem(
      "blinkit_search",
      JSON.stringify([searchParam, ...updatedSearchHistory])
    );

    setSearchHistory([searchParam, ...updatedSearchHistory]);
  };

  /* -------------------------------------------------------------------------- */
  /*                           CLEARING SEARCH HISTORY                          */
  /* -------------------------------------------------------------------------- */
  const clearSearchHistory = () => {
    localStorage.removeItem("blinkit_search");
    setSearchHistory([]);
    dispatch(clearSearchParam());
  };

  return (
    <SearchHistoryContext.Provider
      value={{
        setSearchHistoryHandeler,
        clearSearchHistory,
        searchHistory,
      }}
    >
      {children}
    </SearchHistoryContext.Provider>
  );
};

export default SearchHistoryContext;
export { SearchHistoryProvider };
