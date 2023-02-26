import React, { useEffect } from "react";
import { useState, useCallback } from 'react';
import axios from 'axios';
import style from "./RandomCocktail.module.css";
import { Link } from "react-router-dom";

function RandomCocktail() {
    const [data, setData] = useState([]);
    // const url = "https://cors-anywhere.herokuapp.com/http://www.thecocktaildb.com/api/json/v1/1/random.php";
    const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    const cocktailFetch = useCallback(() => {
        axios
            .get(url)
            .then(res => {
                setData(res.data.drinks[0]);
            })
            .catch(e => console.log(e))
    }, []);

    useEffect(() => {
        cocktailFetch();
    }, [cocktailFetch]);

    return (
        <div className={style.randomCocktail}>
            <h1>{data.strDrink}</h1>
            <Link to={`/cocktails/${data.idDrink}`} className={style.containerImg}>
                <img src={data.strDrinkThumb} alt="" />
            </Link>
            <button className={style.button} onClick={cocktailFetch}>Inspire Me</button>
        </div>
    );
}

export default RandomCocktail;