import React from "react";
import styles from "./header-button.module.css";
import {
  ListIcon,
  BurgerIcon,
  Typography,
  Box,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function HeaderButton({ iconType, text, indents }) {
  const icons = {
    ListIcon: ListIcon,
    BurgerIcon: BurgerIcon,
    ProfileIcon: ProfileIcon,
  };

  let Icon = icons[iconType];
  return (
    <div className={indents + " " + styles.button}>
      <Icon type="primary" />
      <span className="pl-2 text text_type_main-default">{text}</span>
    </div>
  );
}

export default HeaderButton;
