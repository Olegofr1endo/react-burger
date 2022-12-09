import React from "react";
import styles from "./scrollable-construct-container.module.css";
import ConstructorElementWrapper from "../constructor-element-wrapper/constructor-element-wrapper";
import { v4 as uuid } from "uuid";

function ScrollableConstructContainer({ statesData }) {
  const { burgerCreation, setBurgerCreation, burgerBun } = { ...statesData };

  function deleteHandler(itemIndex) {
    setBurgerCreation([
      ...burgerCreation.slice(0, itemIndex),
      ...burgerCreation.slice(itemIndex + 1),
    ]);
  }

  const burgerElementsArr = burgerCreation.map((burgerElement, index) => {
    return (
      <ConstructorElementWrapper
        key={uuid()}
        text={burgerElement.name}
        price={burgerElement.price}
        thumbnail={burgerElement.image}
        index={index}
        handleClose={deleteHandler}
      />
    );
  });

  return (
    <>
      <ConstructorElementWrapper
        indents="pb-4 pl-4"
        type="top"
        isLocked={true}
        text={burgerBun.name}
        price={burgerBun.price}
        thumbnail={burgerBun.image}
      />
      <div className={"pl-4 pr-2 " + styles.constructor}>
        {burgerElementsArr}
      </div>
      <ConstructorElementWrapper
        indents="pt-4 pl-4"
        type="bottom"
        isLocked={true}
        text={burgerBun.name}
        price={burgerBun.price}
        thumbnail={burgerBun.image}
      />
    </>
  );
}

export default ScrollableConstructContainer;
