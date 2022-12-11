import {
  CheckMarkIcon,
  CloseIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import styles from "./order-details.module.css";

function OrderDetails({ data, handleClose }) {
  const close = handleClose(data.orderModal, data.setOrderModal);

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener("mousedown", close);
    }, 0);
    return () => document.removeEventListener("mousedown", close);
  });

  return (
    <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
      <h2 className={`text text_type_digits-large pt-30 ${styles.id}`}>123</h2>
      <span className={`text text_type_main-medium pt-8 ${styles.idCapt}`}>
        идентификатор заказа
      </span>
      <div className={`mt-15 ${styles.iconSet}`}>
        <div className={styles.icon}>
          <CheckMarkIcon type="primary" />
        </div>
      </div>
      <span className={`mt-15 text text_type_main-default`}>
        Ваш заказ начали готовить
      </span>
      <span className={`mt-2 text text_type_main-default ${styles.darker}`}>
        Дождитесь готовности на орбитальной станции
      </span>
      <div className={styles.close} onClick={close}>
        <CloseIcon type="primary" />
      </div>
    </div>
  );
}

export default OrderDetails;
