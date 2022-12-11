import React from "react";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

function Modal({ data }) {
  function closeModal(state, setter) {
    return function () {
      console.log("close");
      setter({ ...state, isOpened: false });
    };
  }

  const isOvelayOpened =
    data.ingredientModal.isOpened || data.orderModal.isOpened;
  return (
    <>
      {isOvelayOpened && (
        <div className={styles.modal}>
          <ModalOverlay />
          {data.orderModal.isOpened && (
            <OrderDetails data={data} handleClose={closeModal} />
          )}
          {data.ingredientModal.isOpened && (
            <IngredientDetails data={data} handleClose={closeModal} />
          )}
        </div>
      )}
    </>
  );
}

export default Modal;
