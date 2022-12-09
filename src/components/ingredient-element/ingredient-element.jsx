import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ingredient-element.module.css";

function IngredientElement({ ingredient, statesData }) {
  const { burgerCreation, setBurgerCreation, burgerBun, setBurgerBun } = {
    ...statesData,
  };

  let counter = useMemo(() => {
    if (ingredient._id === burgerBun._id) {
      return 1;
    }
    return burgerCreation.reduce((sum, item) => {
      if (item._id === ingredient._id) {
        return (sum += 1);
      }
      return sum;
    }, 0);
  }, [burgerCreation, burgerBun]);

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
      <div className={`pb-2 text text_type_digits-default ${styles.price}`}>
        {ingredient.price} <CurrencyIcon />
      </div>
      <span className={`text text_type_main-default ${styles.name}`}>
        {ingredient.name}
      </span>
      <div className={styles.counter}>
        {counter !== 0 && <Counter count={counter} size="default" />}
      </div>
    </article>
  );
}

IngredientElement.propTypes = {
  ingredient: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    proteins: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    calories: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_mobile: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    __v: PropTypes.number.isRequired,
  }).isRequired,
  statesData: PropTypes.shape({
    burgerCreation: PropTypes.array.isRequired,
    setBurgerCreation: PropTypes.func.isRequired,
    burgerBun: PropTypes.object.isRequired,
    setBurgerBun: PropTypes.func.isRequired,
  }).isRequired,
};

export default IngredientElement;
