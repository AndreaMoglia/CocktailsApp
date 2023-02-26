import React, { useState } from "react";
import clsx from 'clsx';
import style from "./CocktailList.module.css";
import { useGlobalContext } from "../../context";
import CocktailsGrid from "../CocktailsGrid/CocktailsGrid";
import CocktailsTable from "../CocktailsTable/CocktailsTable";
import Grid from "../../assets/Grid";
import Table from "../../assets/Table";

const CocktailList = () => {
  const { cocktails, isLoading } = useGlobalContext();
  const [displayGrid, setDisplayGrid] = useState("true");

  if (cocktails.length === 0 && !isLoading) {
    return <h1 className={style.sectionTitle}>Nessun Cocktail trovato!</h1>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className={style.switch}>
          <div className={clsx(style.option, { [style.active]: displayGrid })}
            onClick={() => setDisplayGrid(true)}>
            {<Grid />}
          </div>
          <div className={clsx(style.option, { [style.active]: !displayGrid })}
            onClick={() => setDisplayGrid(false)}>
            {<Table />}
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {
          displayGrid ?
            <CocktailsGrid /> :
            <div className={style.tableContainer}>
              <CocktailsTable />
            </div>
        }
      </div>
    </div>
  );
};

export default CocktailList;
