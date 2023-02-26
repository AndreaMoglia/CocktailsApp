import React from "react";
import { Link } from "react-router-dom";
import style from "./CocktailLine.module.css"

function CocktailLine({ id, name, image, category, alcoholic }) {

    return (
        <tr key={id}>
            <td className={style.cocktailImage}>
                <Link to={`/cocktails/${id}`}>
                    <img src={image} alt={name} />
                </Link>
            </td>
            <td>{name} </td>
            <td>{category}</td>
            <td>{alcoholic}</td>
        </tr>

    )
};

export default CocktailLine;