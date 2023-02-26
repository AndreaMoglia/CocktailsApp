import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./CocktailDetail.module.css"
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const CocktailDetail = () => {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);

  const getCoctailInfo = useCallback(
    async function () {
      try {
        let response = await fetch(`${url}${id}`);
        let data = await response.json();
        let { drinks } = data;

        if (data) {
          let ingredienti = []
          for (let i = 1; i <= 15; i++) {
            if (drinks[0]["strIngredient" + i])
              ingredienti.push(drinks[0]["strIngredient" + i])
            else break;
          }

          let newCocktail = {
            ...drinks[0], ingredienti
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [id]
  );

  useEffect(() => {
    getCoctailInfo();
  }, [id, getCoctailInfo]);

  if (!cocktail) {
    return <h2 className={style.sectionTitle}></h2>;
  }

  return (
    <div className={style.drink}>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <div className={style.containerDetailsDrink}>
        <p>
          <span className={style.drinkData}>Nome: </span>
          {cocktail.strDrink}
        </p>
        <p>
          <span className={style.drinkData}>Categoria: </span> {cocktail.strCategory}
        </p>
        <p>
          <span className={style.drinkData}>Ingredienti: </span>
          {cocktail.ingredienti.map((ingrediente, index) => {
            if ((cocktail.ingredienti.length - 1) === index) {
              return ingrediente ? <span>{ingrediente}  </span> : "";
            } else
              return ingrediente ? <span>{ingrediente} - </span> : "";
          })}
        </p>
        <p>
          <span className={style.drinkData}>Tipo: </span> {cocktail.strAlcoholic}
        </p>
        <p>
          <span className={style.drinkData}>Bicchiere: </span> {cocktail.strGlass}
        </p>
        <p className={style.containerIstruzioni}>
          <span className={style.drinkData}>Istruzioni: </span> {cocktail.strInstructions}
        </p>
      </div>
    </div>
  );
};

export default CocktailDetail;
