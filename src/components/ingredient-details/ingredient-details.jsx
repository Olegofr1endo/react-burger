import React, { useEffect } from "react";
import styles from "./ingredient-details.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function IngredientDetails({ data, handleClose }) {
  const ingredientDetails = data.data;
  const close = handleClose(data.data, data.setData);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("click", close);
    }, 0);
    return () => document.removeEventListener("click", close);
  });

  return (
    <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
      <div className={`pl-10 pt-10 ${styles.detailsWrapper}`}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
      </div>
      <img src={ingredientDetails.data.image_large} />
      <p className={`text text_type_main-medium pt-4`}>
        {ingredientDetails.data.name}
      </p>
      <table
        className={`pt-8 pb-15 text text_type_main-default text_color_inactive ${styles.table}`}
      >
        <thead>
          <tr>
            <td>Калории,ккал</td>
            <td>Белки, г</td>
            <td>Жиры, г</td>
            <td>Углеводы, г</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{ingredientDetails.data.calories}</td>
            <td>{ingredientDetails.data.proteins}</td>
            <td>{ingredientDetails.data.fat}</td>
            <td>{ingredientDetails.data.carbohydrates}</td>
          </tr>
        </tbody>
      </table>
      <div className={styles.close} onClick={close}>
        <CloseIcon type="primary" />
      </div>
    </div>
  );
}

export default IngredientDetails;
