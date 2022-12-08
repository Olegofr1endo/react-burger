import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./constructor-element-wrapper.module.css";
import React from "react";

function ConstructorElementWrapper({
  indents,
  type,
  isLocked = false,
  text,
  thumbnail,
  price,
}) {
  return (
    <div className={indents + " " + styles.wrapperElement}>
      {!isLocked && <DragIcon type="primary" />}
      <div className={"pl-2 " + styles.constructorElement}>
        <ConstructorElement
          type={type}
          isLocked={isLocked}
          text={text}
          thumbnail={thumbnail}
          price={price}
        />
      </div>
    </div>
  );
}

export default ConstructorElementWrapper;
