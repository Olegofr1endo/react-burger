import React from "react";
import styles from "./burger-ingridients.module.css";
import BurgerIngredientsNav from "../burger-ingredients-nav/burger-ingredients-nav";
import BurgerIngredientsContent from "../burger-ingredients-content/burger-ingredients-content";

function BurgerIngridients({ data, addBurgerElement }) {
  return (
    <section className={styles.content}>
      <h1 className="text text_type_main-large mt-10">Соберите Бургер</h1>
      <BurgerIngredientsNav />
      <BurgerIngredientsContent
        addBurgerElement={addBurgerElement}
        data={data}
      />
    </section>
  );
}

export default BurgerIngridients;
