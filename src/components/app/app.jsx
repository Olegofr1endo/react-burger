import React, { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngridients from "../burger-ingredients/burger-ingridients";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import { createPortal } from "react-dom";
import Api from "../../API";

const modalRoot = document.getElementById("modal-root");

function App() {
  const [burgerCreation, setBurgerCreation] = useState([]);
  const [burgerBun, setBurgerBun] = useState({ price: 0 });
  const [data, setData] = useState([]);
  const [ingredientModal, setIngredientModal] = useState({
    isOpened: false,
    data: {},
  });
  const [orderModal, setOrderModal] = useState({
    isOpened: false,
    data: {},
  });
  const statesData = {
    burgerCreation,
    setBurgerCreation,
    burgerBun,
    setBurgerBun,
  };
  const ingredientModalState = {
    ingredientModal,
    setIngredientModal,
  };

  function openOrderPopup() {
    setOrderModal({ ...orderModal, isOpened: true });
  }

  useEffect(() => {
    (async function () {
      setData(await Api.getData());
    })();
  }, []);

  return (
    <>
      <div className="App">
        <AppHeader />
        <div className={`mb-10 ${styles.main}`}>
          <BurgerIngridients
            data={data}
            statesData={statesData}
            ingredientModalState={ingredientModalState}
          />
          <BurgerConstructor
            statesData={statesData}
            handleOrderOpen={openOrderPopup}
          />
        </div>
      </div>
      {createPortal(
        <Modal
          data={{
            ingredientModal,
            setIngredientModal,
            orderModal,
            setOrderModal,
          }}
        />,
        modalRoot
      )}
    </>
  );
}

export default App;
