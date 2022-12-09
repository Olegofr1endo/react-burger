import React, { useState, useMemo } from "react";
import AppHeader from "../app-header/app-header";
import BurgerIngridients from "../burger-ingredients/burger-ingridients";
import { data } from "../../utils/data";
import styles from "./app.module.css";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  const [burgerCreation, setBurgerCreation] = useState([]);
  const [burgerBun, setBurgerBun] = useState({ price: 0 });
  const [isActive, setIsActive] = useState({
    constructor: true,
    orders: false,
    profile: false,
  });

  const statesData = useMemo(() => {
    return {
      burgerCreation,
      setBurgerCreation,
      burgerBun,
      setBurgerBun,
    };
  }, [burgerCreation, burgerBun]);

  return (
    <div className="App">
      <AppHeader isActive={isActive} setIsActive={setIsActive} />
      <div className={"mb-10 " + styles.main}>
        <BurgerIngridients data={data} statesData={statesData} />
        <BurgerConstructor statesData={statesData} />
      </div>
    </div>
  );
}

export default App;
