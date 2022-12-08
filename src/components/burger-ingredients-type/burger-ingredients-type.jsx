import React from "react";
import IngredientElement from "../ingredient-element/ingredient-element";
import styles from "./burger-ingredients-type.module.css";

function BurgerIngredientsType({
  header,
  indents = "",
  data,
  addBurgerElement,
}) {
  return (
    <div className={indents}>
      <h1 className="text text_type_main-medium">{header}</h1>
      <div className={"pl-4 pr-2 " + styles.content}>
        {data.map((ingredient) => {
          return (
            <IngredientElement
              addBurgerElement={addBurgerElement}
              key={ingredient._id}
              ingredient={ingredient}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BurgerIngredientsType;
