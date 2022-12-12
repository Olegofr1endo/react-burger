import React from "react";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";
import createPopup from "../../HOCs/popup/create-popup";
import PropTypes from "prop-types";
import { ingredientPropsNoneRequired } from "../../utils/propTypes";

function Modal({ data }) {
  const OrderDetailsElement = createPopup(OrderDetails)({
    data: data.orderModal,
    setData: data.setOrderModal,
  });
  const IngredientDetailsElement = createPopup(IngredientDetails)({
    data: data.ingredientModal,
    setData: data.setIngredientModal,
  });

  const isOvelayOpened =
    data.ingredientModal.isOpened || data.orderModal.isOpened;
  return (
    <>
      {isOvelayOpened && (
        <div className={styles.modal}>
          <ModalOverlay />
          {data.orderModal.isOpened && <OrderDetailsElement />}
          {data.ingredientModal.isOpened && <IngredientDetailsElement />}
        </div>
      )}
    </>
  );
}

Modal.propTypes = {
  data: PropTypes.shape({
    orderModal: PropTypes.object,
    setOrderModal: PropTypes.func.isRequired,
    ingredientModal: ingredientPropsNoneRequired,
    setIngredientModal: PropTypes.func,
  }),
};

export default Modal;
