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
    burgerCreation: PropTypes.array,
    setBurgerCreation: PropTypes.func,
    burgerBun: PropTypes.object,
    setBurgerBun: PropTypes.func,
  }),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string,
      proteins: PropTypes.number,
      fat: PropTypes.number,
      carbohydrates: PropTypes.number,
      calories: PropTypes.number,
      price: PropTypes.number,
      image: PropTypes.string,
      image_mobile: PropTypes.string,
      image_large: PropTypes.string,
      __v: PropTypes.number,
    })
  ),
};

export default BurgerIngridients;
