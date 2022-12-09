import React, { useMemo } from "react";
import styles from "./burger-ingredients-content.module.css";
import SortedByType from "../sorted-by-type/sorted-by-type";
import PropTypes from "prop-types";

function BurgerIngredientsContent({ data, statesData }) {
  const [bun, main, sauce] = ["bun", "main", "sauce"];
  const bunsData = useMemo(
    () =>
      data.filter((item) => {
        return item.type === bun;
      }),
    [data]
  );
  const mainsData = useMemo(
    () =>
      data.filter((item) => {
        return item.type === main;
      }),
    [data]
  );
  const saucesData = useMemo(
    () =>
      data.filter((item) => {
        return item.type === sauce;
      }),
    [data]
  );

  return (
    <div className={styles.content}>
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

BurgerIngredientsContent.propTypes = {
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

export default BurgerIngredientsContent;
