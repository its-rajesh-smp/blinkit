import React, { useState } from "react";

const SearchHistoryContext = React.createContext({
  searchHistory: [],
  setSearchHistoryHandeler: () => {},
  clearSearchHistory: () => {},
});

const SearchHistoryProvider = ({ children }) => {
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
