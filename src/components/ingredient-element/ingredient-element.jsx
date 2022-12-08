import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import styles from "./ingredient-element.module.css";

function IngredientElement({ ingredient, addBurgerElement }) {
  return (
    <article
      className={styles.element}
      onClick={() => addBurgerElement(ingredient)}
    >
      <img src={ingredient.image} className="pb-2"></img>
      <div className={"pb-2 text text_type_digits-default " + styles.price}>
        {ingredient.price} <CurrencyIcon />
      </div>
      <span className={"text text_type_main-default " + styles.name}>
        {ingredient.name}
      </span>
    </article>
  );
}

export default IngredientElement;
