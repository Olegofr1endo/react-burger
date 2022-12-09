import React from "react";
import styles from "./burger-ingridients.module.css";
import PropTypes from "prop-types";
import BurgerIngredientsNav from "../burger-ingredients-nav/burger-ingredients-nav";
import BurgerIngredientsContent from "../burger-ingredients-content/burger-ingredients-content";

function BurgerIngridients({ data, statesData }) {
  return (
    <section className={styles.content}>
      <h1 className="text text_type_main-large mt-10">Соберите Бургер</h1>
      <BurgerIngredientsNav />
      <BurgerIngredientsContent statesData={statesData} data={data} />
    </section>
  );
}

BurgerIngridients.propTypes = {
  statesData: PropTypes.shape({
    burgerCreation: PropTypes.array.isRequired,
    setBurgerCreation: PropTypes.func.isRequired,
    burgerBun: PropTypes.object.isRequired,
    setBurgerBun: PropTypes.func.isRequired,
  }).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
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
    }).isRequired
  ).isRequired,
};

export default BurgerIngridients;
