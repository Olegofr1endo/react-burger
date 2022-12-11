import React, { useState, useEffect } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngridients from "../burger-ingredients/burger-ingridients";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");

function App() {
  const [burgerCreation, setBurgerCreation] = useState([]);
  const [burgerBun, setBurgerBun] = useState({ price: 0 });
  const [data, setData] = useState([]);
  const [ingredientModal, setIngredientModal] = useState({
    isOpened: true,
    data: {
      _id: "60666c42cc7b410027a1a9b1",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0,
    },
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

  function openOrderPopup() {
    console.log("open");
    setOrderModal({ ...orderModal, isOpened: true });
  }

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://norma.nomoreparties.space/api/ingredients"
      );
      const data = await res.json();
      setData(data.data);
      console.log(data.data);
    }
    getData();
  }, []);

  return (
    <>
      <div className="App">
        <AppHeader />
        <div className={`mb-10 ${styles.main}`}>
          <BurgerIngridients data={data} statesData={statesData} />
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
