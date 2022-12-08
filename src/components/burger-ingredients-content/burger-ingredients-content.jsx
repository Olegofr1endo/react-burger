import React from "react";
import styles from "./burger-ingredients-content.module.css";
import BurgerIngredientsType from "../burger-ingredients-type/burger-ingredients-type";

function BurgerIngredientsContent({ data, addBurgerElement }) {
  const bunsData = data.filter((item) => {
    return item.type === "bun";
  });
  const mainsData = data.filter((item) => {
    return item.type === "main";
  });
  const saucesData = data.filter((item) => {
    return item.type === "sauce";
  });

  return (
    <div className={styles.content}>
      <BurgerIngredientsType
        indents="mt-10 mb-10"
        data={bunsData}
        header="Булки"
        addBurgerElement={addBurgerElement}
      />
      <BurgerIngredientsType
        indents="mb-10"
        data={saucesData}
        header="Соусы"
        addBurgerElement={addBurgerElement}
      />
      <BurgerIngredientsType
        data={mainsData}
        header="Начинки"
        addBurgerElement={addBurgerElement}
      />
    </div>
  );
}

export default BurgerIngredientsContent;
