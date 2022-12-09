import React from "react";
import styles from "./burger-ingredients-content.module.css";
import SortedByType from "../sorted-by-type/sorted-by-type";

function BurgerIngredientsContent({ data, statesData }) {
  const bunsData = data.filter((item) => {
    return item.type === "bun";
  });
  const mainsData = data.filter((item) => {
    return item.type === "main";
  });
  const saucesData = data.filter((item) => {
    return item.type === "sauce";
  });

  function scrollHandler(e) {
    console.log("кручу");
  }

  return (
    <div className={styles.content} onScroll={scrollHandler}>
      <SortedByType
        statesData={statesData}
        indents="mt-10 mb-10"
        data={bunsData}
        header="Булки"
      />
      <SortedByType
        statesData={statesData}
        indents="mb-10"
        data={saucesData}
        header="Соусы"
      />
      <SortedByType statesData={statesData} data={mainsData} header="Начинки" />
    </div>
  );
}

export default BurgerIngredientsContent;
