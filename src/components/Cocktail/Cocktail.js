import React from "react";
import "./Cocktail.css";

const Cocktail = (props) => {
  //
  return (
    <div className="drink-section">
      {props.drinks.map((drink) => {
        return (
          <div class={"recipe " + drink.availability}>
            <div class={"drink-card " + drink.spirit}>
                <div class="image">
                    <img src={"/" + drink.glass + ".png"}></img>
                </div>
                <div class="drink-info">
                    <p class="title">{drink.name}</p>
                    <p class="ingredients">{drink.ingredients}</p>
                </div>
            </div>
            <div class={"instruction-card " + drink.spirit}>
              <p class="instructions">1 oz : 0.75 oz : 2 dashes</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cocktail;