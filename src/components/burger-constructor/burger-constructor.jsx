import React from "react";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import ScrollableConstructContainer from "../scrollable-construct-container/scrollable-construct-container";

function BurgerConstructor({ statesData }) {
  const sum =
    statesData.burgerCreation.length > 0
      ? statesData.burgerCreation.reduce((sum, element) => {
          return (sum += element.price);
        }, 0) +
        statesData.burgerBun.price * 2
      : statesData.burgerBun.price * 2;

  return (
    <section className={"pt-25 " + styles.content}>
      <ScrollableConstructContainer statesData={statesData} />
      <div className={"pt-10 " + styles.order}>
        <div className={"pr-10 " + styles.cost}>
          <span className="text text_type_digits-medium pr-2">{sum}</span>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  statesData: PropTypes.shape({
    burgerCreation: PropTypes.array,
    setBurgerCreation: PropTypes.func,
    burgerBun: PropTypes.object,
    setBurgerBun: PropTypes.func,
  }),
};

export default BurgerConstructor;
