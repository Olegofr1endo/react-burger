import React from "react";
import styles from "./header-button.module.css";
import {
  ListIcon,
  BurgerIcon,
  Typography,
  Box,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

function HeaderButton({ iconType, text, indents, isActive, onClick }) {
  const icons = {
    ListIcon: ListIcon,
    BurgerIcon: BurgerIcon,
    ProfileIcon: ProfileIcon,
  };

  const className = isActive
    ? indents + " " + styles.button + " " + styles.button_active
    : indents + " " + styles.button;

  const Icon = icons[iconType];
  return (
    <div className={className} onClick={onClick}>
      {isActive ? <Icon type="primary" /> : <Icon type="secondary" />}
      <span className={`pl-2 text text_type_main-default`}>{text}</span>
    </div>
  );
}

export default HeaderButton;
