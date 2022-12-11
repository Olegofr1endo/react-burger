import React from "react";
import styles from "./poup.module.css";

export default function madePopup(Element) {
  return function ({ data, handleClose }) {
    const close = handleClose(data.data, data.setData);

    useEffect(() => {
      setTimeout(() => {
        document.addEventListener("click", close);
      }, 0);
      return () => document.removeEventListener("click", close);
    });

    return (
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <Element data={data} />
      </div>
    );
  };
}
