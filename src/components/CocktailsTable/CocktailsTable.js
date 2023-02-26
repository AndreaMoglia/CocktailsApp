import React from "react";
import { useGlobalContext } from "../../context";
import style from "./CocktailsTable.module.css";
import CocktailLine from "../CocktailLine/CocktailLine";

function CocktailsTable() {
    const { cocktails } = useGlobalContext();

    return (
        <table className={style.table}>
            <thead>
                <tr>
                    <th>Immagine</th>
                    <th>Nome</th>
                    <th>Categoria</th>
                    <th>Tipologia</th>
                </tr>
            </thead>
            <tbody>
                {cocktails.map((cocktail) => {
                    return <CocktailLine key={cocktail.id} {...cocktail} />;
                })}
            </tbody>
        </table>
    )
};

export default CocktailsTable;

