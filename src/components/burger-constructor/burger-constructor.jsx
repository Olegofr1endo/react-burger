import React from "react";
import styles from "./burger-constructor.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ScrollableConstructContainer from "../scrollable-construct-container/scrollable-construct-container";

function BurgerConstructor({ burgerCreation }) {
  return (
    <section className={"pt-25 " + styles.content}>
      <ScrollableConstructContainer burgerCreation={burgerCreation} />
      <div className={"pt-10 " + styles.order}>
        <div className={"pr-10 " + styles.cost}>
          <span className="text text_type_digits-medium pr-2">0</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
