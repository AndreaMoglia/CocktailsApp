import React from "react";
import { Link } from "react-router-dom";
import style from "./CocktailCard.module.css"
import Drink from "../../assets/Drink.js"
function Cocktail({ id, name, image, alcoholic }) {
  return (
    <div className={style.cocktail}>
      <div className={style.cocktailHeader}>
        <h3>{name} </h3>
        <Link to={`/cocktails/${id}`}>
          <div className={style.containerImg}>
            <img src={image} alt={name} />
            {alcoholic != "Non alcoholic" && <Drink />}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Cocktail;
