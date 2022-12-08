import React from "react";
import styles from "./app-header.module.css";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderButton from "../header-button/header-button";

function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.content}>
        <div className={styles.buttons}>
          <HeaderButton
            text="Конструктор"
            indents="pl-5 pr-5 mr-2"
            iconType="BurgerIcon"
          />
          <HeaderButton
            text="Лента Заказов"
            indents="pl-5 pr-5"
            iconType="ListIcon"
          />
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <HeaderButton
          text="Личный кабиет"
          indents="pl-5 pr-5"
          iconType="ProfileIcon"
        />
      </nav>
    </header>
  );
}

export default AppHeader;
