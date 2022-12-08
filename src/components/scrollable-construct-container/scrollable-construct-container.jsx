import React from "react";
import styles from "./scrollable-construct-container.module.css";
import ConstructorElementWrapper from "../constructor-element-wrapper/constructor-element-wrapper";
import { v4 as uuid } from "uuid";

function ScrollableConstructContainer({ burgerCreation }) {
  console.log(burgerCreation);
  const burgerElementsArr = burgerCreation.map((burgerElement) => {
    return (
      <ConstructorElementWrapper
        key={uuid()}
        text={burgerElement.name}
        price={burgerElement.price}
        thumbnail={burgerElement.image}
      />
    );
  });

  return (
    <>
      <ConstructorElementWrapper
        indents="pb-4 pl-4"
        type="top"
        isLocked={true}
      />
      <div className={"pl-4 pr-2 " + styles.constructor}>
        {burgerElementsArr}
      </div>
      <ConstructorElementWrapper
        indents="pt-4 pl-4"
        type="bottom"
        isLocked={true}
      />
    </>
  );
}

export default ScrollableConstructContainer;
