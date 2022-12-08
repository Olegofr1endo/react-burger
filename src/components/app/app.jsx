import React, { useState } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngridients from "../burger-ingredients/burger-ingridients";
import { data } from "../../utils/data";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  const [burgerCreation, setBurgerCreation] = useState([]);

  function addBurgerElement(elementData) {
    setBurgerCreation([...burgerCreation, elementData]);
    console.log(burgerCreation);
  }

  return (
    <div className="App">
      <AppHeader />
      <div className={"mb-10 " + styles.main}>
        <BurgerIngridients addBurgerElement={addBurgerElement} data={data} />
        <BurgerConstructor burgerCreation={burgerCreation} />
      </div>
    </div>
  );
}

export default App;
