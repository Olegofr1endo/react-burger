import React from "react";
import styles from "./ingredient-details.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function IngredientDetails({ data, handleClose }) {
  const close = handleClose(data.ingredientModal, data.setIngredientModal);
  return (
    <div className={styles.popup}>
      <div className={`pl-10 pt-10 ${styles.detailsWrapper}`}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
      </div>
      <img src={data.ingredientModal.data.image_large} />
      <p className={`text text_type_main-medium pt-4`}>
        {data.ingredientModal.data.name}
      </p>
      <table
        className={`pt-8 text text_type_main-default text_color_inactive ${styles.table}`}
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
            <td>{data.ingredientModal.data.calories}</td>
            <td>{data.ingredientModal.data.proteins}</td>
            <td>{data.ingredientModal.data.fat}</td>
            <td>{data.ingredientModal.data.carbohydrates}</td>
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
