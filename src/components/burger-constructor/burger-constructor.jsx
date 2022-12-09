import React, { useMemo } from "react";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { statesDataProps } from "../../utils/propTypes";
import ScrollableConstructContainer from "../scrollable-construct-container/scrollable-construct-container";

function BurgerConstructor({ statesData }) {
  const sum = useMemo(() => {
    return statesData.burgerCreation.length > 0
      ? statesData.burgerCreation.reduce((sum, element) => {
          return (sum += element.price);
        }, 0) +
          statesData.burgerBun.price * 2
      : statesData.burgerBun.price * 2;
  }, [statesData.burgerCreation, statesData.burgerBun]);

  return (
    <section className={`pt-25 ${styles.content}`}>
      <ScrollableConstructContainer statesData={statesData} />
      <div className={`pt-10 ${styles.order}`}>
        <div className={`pr-10 ${styles.cost}`}>
          <span className="text text_type_digits-medium pr-3">{sum}</span>
          <div className={styles.icon}>
            <CurrencyIcon type="primary" />
          </div>
        </div>
        <Button
          disabled={!statesData.burgerBun.type}
          htmlType="button"
          type="primary"
          size="large"
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  statesData: statesDataProps,
};

export default BurgerConstructor;
