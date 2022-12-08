import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useState } from "react";
import styles from "./burger-ingredients-nav.module.css";

function BurgerIngredientsNav() {
  const [isActive, setIsActive] = useState(1);

  return (
    <nav>
      <ul className={"text text_type_main-default mt-5 " + styles.menuNav}>
        <li>
          <Tab active={isActive === 1} onClick={() => setIsActive(1)}>
            Булки
          </Tab>
        </li>
        <li>
          <Tab active={isActive === 2} onClick={() => setIsActive(2)}>
            Соусы
          </Tab>
        </li>
        <li>
          <Tab active={isActive === 3} onClick={() => setIsActive(3)}>
            Начинки
          </Tab>
        </li>
      </ul>
    </nav>
  );
}

export default BurgerIngredientsNav;
