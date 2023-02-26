import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [searchName, setSearchName] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let debounceTimer;
  const debounce = useCallback(async (callback) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, 200);
  }, []);

  const fetchData = useCallback(
    async () => {
      try {
        setIsLoading(true)
        let response = await fetch(`${"https://www.thecocktaildb.com/api/json/v1/1/search.php?s="}${searchName}`);
        if (response.status === 200) {
          let data = await response.json();
          let { drinks } = data;

          if (drinks) {
            let newCocktails = drinks.map((cocktail) => {
              let { idDrink, strDrink, strDrinkThumb, strCategory, strGlass, strAlcoholic } =
                cocktail;
              return {
                id: idDrink,
                name: strDrink,
                image: strDrinkThumb,
                category: strCategory,
                glass: strGlass,
                alcoholic: strAlcoholic
              };
            });
            setIsLoading(false)
            setCocktails(newCocktails);
          } else {
            setCocktails([]);
            setIsLoading(false)
          }
        }
      } catch (err) {
        console.log(err);
      }
    }, [searchName]);

  useEffect(() => {
    debounce(() => fetchData());
  }, [searchName, fetchData]);

  return (
    <AppContext.Provider value={{ cocktails, setSearchName, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
