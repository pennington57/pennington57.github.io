import React from "react";
import "./Cocktail.css";

const Cocktail = (props) => {
  //
  return (
    <div className="drink-section">
      {props.drinks.map((drink) => {
        return (
            <div class={"drink-card " + drink.spirit + " " + drink.availability}>
                <div class="image">
                    <img src={"/" + drink.glass + ".png"}></img>
                </div>
                <div class="drink-info">
                    <p class="title">{drink.name}</p>
                    <p class="ingredients">{drink.ingredients}</p>
                </div>
            </div>
        );
      })}
    </div>
  );
};

export default Cocktail;