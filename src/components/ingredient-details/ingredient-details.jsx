import React from "react";
import styles from "./ingredient-details.module.css";
import PropTypes from "prop-types";
import { ingredientProps } from "../../utils/propTypes";

function IngredientDetails({ data }) {
  const ingredientDetails = data.ingredientModal;

  return (
    <>
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
    </>
  );
}

IngredientDetails.propTypes = {
  data: PropTypes.shape({
    ingredientModal: PropTypes.shape({
      isOpened: PropTypes.bool.isRequired,
      data: ingredientProps,
    }),
  }),
};

export default IngredientDetails;
