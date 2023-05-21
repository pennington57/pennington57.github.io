import React from "react";
import "./Cocktail.css"

const Cocktail = (props) => {
    {props.drinks.map((drink) => {
        return (
            <div class={"drink-card " + drink.spirit}>
                <div class="image">
                    <img src={"../../public/" + drink.glass + ".png"}></img>
                </div>
                <div class="drink-info">
                    <h3 class="title">{drink.name}</h3>
                    <p class="ingredients">{drink.ingredients}</p>
                </div>
            </div>
        );
    })}
};

export default Cocktail;