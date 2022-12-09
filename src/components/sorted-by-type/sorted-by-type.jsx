import React from "react";
import IngredientElement from "../ingredient-element/ingredient-element";
import styles from "./sorted-by-type.module.css";
import PropTypes from "prop-types";

function SortedByType({ header, indents = "", data, statesData }) {
  return (
    <div className={indents}>
      <h1 className="text text_type_main-medium">{header}</h1>
      <div className={`pl-4 pr-2 ${styles.content}`}>
        {data.map((ingredient) => {
          return (
            <IngredientElement
              statesData={statesData}
              key={ingredient._id}
              ingredient={ingredient}
            />
          );
        })}
      </div>
    </div>
  );
}

SortedByType.propTypes = {
  header: PropTypes.string.isRequired,
  indents: PropTypes.string,
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
  statesData: PropTypes.shape({
    burgerCreation: PropTypes.array.isRequired,
    setBurgerCreation: PropTypes.func.isRequired,
    burgerBun: PropTypes.object.isRequired,
    setBurgerBun: PropTypes.func.isRequired,
  }).isRequired,
};

export default SortedByType;
