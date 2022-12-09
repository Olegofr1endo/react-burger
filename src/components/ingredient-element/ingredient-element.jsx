import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";
import styles from "./ingredient-element.module.css";

function IngredientElement({ ingredient, statesData }) {
  const { burgerCreation, setBurgerCreation, burgerBun, setBurgerBun } =
    useMemo(() => {
      return {
        ...statesData,
      };
    }, [statesData.burgerCreation, statesData.burgerBun]);

  let counter = useMemo(
    () =>
      burgerCreation.reduce((sum, item) => {
        if (item._id === ingredient._id) {
          return (sum += 1);
        }
        return sum;
      }, 0),
    [burgerCreation]
  );

  if (ingredient._id === burgerBun._id) {
    counter++;
  }

  function addBurgerElement(elementData) {
    if (elementData.type === "bun") {
      setBurgerBun(elementData);
    } else {
      setBurgerCreation([...burgerCreation, elementData]);
    }
  }

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
      <div className={styles.counter}>
        {counter !== 0 && <Counter count={counter} size="default" />}
      </div>
    </article>
  );
}

export default IngredientElement;
