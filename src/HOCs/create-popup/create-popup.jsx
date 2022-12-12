import React, { useEffect } from "react";
import styles from "./create-popup.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const createPopup = (Element) => {
  return (data) => () => {
    function closeModal() {
      data.setData({ ...data.data, isOpened: false });
    }

    function escCloseHandler(e) {
      if (e.key === "Escape") {
        closeModal();
      }
    }

    useEffect(() => {
      setTimeout(() => {
        document.addEventListener("click", closeModal);
        document.addEventListener("keydown", escCloseHandler);
      }, 0);
      return () => {
        document.removeEventListener("click", closeModal);
        document.removeEventListener("keydown", escCloseHandler);
      };
    });

    return (
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <Element data={data} />
        <div className={styles.close} onClick={closeModal}>
          <CloseIcon type="primary" />
        </div>
      </div>
    );
  };
};

export default createPopup;
