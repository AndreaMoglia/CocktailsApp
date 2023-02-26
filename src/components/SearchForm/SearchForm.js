import React from "react";
import { useGlobalContext } from "../../context";
import style from "./SearchForm.module.css"

function SearchForm() {
  const { setSearchName } = useGlobalContext();

  return (
    <form className={style.searchForm} >
      <div className={style.formDesign}>
        <input
          placeholder="Cerca il tuo cocktail"
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchForm;
