import React from "react";
import styles from "./burger-ingridients.module.css";
import {
  statesDataProps,
  dataProps,
  ingredientModalStateProps,
} from "../../utils/propTypes";
import BurgerIngredientsNav from "../burger-ingredients-nav/burger-ingredients-nav";
import BurgerIngredientsContent from "../burger-ingredients-content/burger-ingredients-content";

function BurgerIngridients({ data, statesData, ingredientModalState }) {
  return (
    <section className={styles.content}>
      <h1 className="text text_type_main-large mt-10">Соберите Бургер</h1>
      <BurgerIngredientsNav />
      <BurgerIngredientsContent
        statesData={statesData}
        data={data}
        ingredientModalState={ingredientModalState}
      />
    </section>
  );
}

BurgerIngridients.propTypes = {
  statesData: statesDataProps,
  data: dataProps,
  ingredientModalState: ingredientModalStateProps,
};

export default BurgerIngridients;
