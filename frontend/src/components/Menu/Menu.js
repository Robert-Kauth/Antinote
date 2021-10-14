import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import styled from "styled-components";
import { mdiMenu, mdiMenuOpen } from "@mdi/js";
import styles from "./Menu.module.css";
const Button = styled.button`
  display: flex;
  border-radius: 5px;
  height: 25px;
  width: 30px;
`;

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const show = () => {
    return setShowMenu(!showMenu);
  };
  return (
    <div className={styles.menuContainer}>
      {!showMenu && (
        <Button onClick={show}>
          <Icon path={mdiMenu} size={0.5}></Icon>
        </Button>
      )}
      {showMenu && (
        <Button onClick={show}>
          <Icon path={mdiMenuOpen} size={0.5}></Icon>
        </Button>
      )}
      {showMenu && (
        <ul className={styles.menuContent}>
          <li className={styles.listItem}>
            <button className={styles.listItem}>Save</button>
          </li>
          <li className={styles.listItem}>
            <button>Edit</button>
          </li>
          <li className={styles.listItem}>
            <button>Delete</button>
          </li>
        </ul>
      )}
    </div>
  );
};
export default Menu;
