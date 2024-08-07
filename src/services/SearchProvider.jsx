import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchProducts, setSearchProducts] = useState(false);
  const [search, setSearch] = useState("");
  const [currentCategory, setCurrentCategory] = useState('Almacen');

  return (
    <SearchContext.Provider value={{ search, setSearch, searchProducts, setSearchProducts, currentCategory, setCurrentCategory }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);