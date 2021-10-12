import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import Icon from "@mdi/react";
import { mdiAccountArrowDown, mdiAccount } from "@mdi/js";
import styled from "styled-components";
import styles from "./Navigation.module.css";

const Button = styled.button`
  border-radius: 10px;
`;

const ProfileButton = ({ user }) => {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener("click", closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  return (
    <div className={styles.profileButton}>
      <Button onClick={openMenu}>
        {!showMenu && (
          <Icon path={mdiAccountArrowDown} size={1} color="black" />
        )}
        {showMenu && <Icon path={mdiAccount} size={1} color="black" />}
      </Button>
      {showMenu && (
        <ul className={styles.profileDropdown}>
          <li className={styles.profileContent}>{user.username}</li>
          <li className={styles.profileContent}>{user.email}</li>
        </ul>
      )}
    </div>
  );
};
export default ProfileButton;
