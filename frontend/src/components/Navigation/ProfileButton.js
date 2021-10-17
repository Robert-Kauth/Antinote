import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@mdi/react";
import { mdiAccountArrowDown, mdiAccount } from "@mdi/js";
import styled from "styled-components";
import styles from "./ProfileButton.module.css";

const Button = styled.button`
  border-radius: 5px;
`;

const ProfileButton = ({ user, notebooks }) => {
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
    <div className={styles.dropdownWrapper}>
      <div className={styles.profileButton}>
        <Button onClick={openMenu}>
          {!showMenu && (
            <Icon path={mdiAccountArrowDown} size={1} color="black" />
          )}
          {showMenu && <Icon path={mdiAccount} size={1} color="black" />}
        </Button>
      </div>
      {showMenu && (
        <ul className={styles.profileDropdown}>
          <li className={styles.profileContent}>{user.username}</li>
          <li className={styles.profileContent}>{user.email}</li>
          {notebooks &&
            notebooks.map((notebook) => (
              <div key={notebook.id}>
                <Link>{notebook.title}</Link>
              </div>
            ))}
        </ul>
      )}
    </div>
  );
};
export default ProfileButton;
