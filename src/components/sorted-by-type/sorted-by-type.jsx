import React from "react";
import IngredientElement from "../ingredient-element/ingredient-element";
import styles from "./sorted-by-type.module.css";
import PropTypes from "prop-types";
import { dataProps, statesDataProps } from "../../utils/propTypes";
import { ingredientModalStateProps } from "../../utils/propTypes";

function SortedByType({
  header,
  indents = "",
  data,
  statesData,
  ingredientModalState,
}) {
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
              ingredientModalState={ingredientModalState}
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
  data: dataProps,
  statesData: statesDataProps,
  ingredientModalState: ingredientModalStateProps,
};

export default SortedByType;
