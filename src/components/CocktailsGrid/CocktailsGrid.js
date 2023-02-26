import React from "react";
import CocktailCard from "../CocktailCard/CocktailCard";
import { useGlobalContext } from "../../context";
import style from "./CocktailsGrid.module.css"


function CocktailsGrid() {
    const { cocktails } = useGlobalContext();

    return (
        <div className={style.cocktailsContainer}>
            {cocktails.map((cocktail) => {
                return <CocktailCard key={cocktail.id} {...cocktail} />;
            })}
        </div>
    )
};

export default CocktailsGrid;

