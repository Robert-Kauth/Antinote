import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { NavLink } from "react-router-dom";
import { mdiAccountArrowDown, mdiAccount } from "@mdi/js";
import styled from "styled-components";
import styles from "./ProfileButton.module.css";

const Button = styled.button`
  border-radius: 5px;
  max-height: fit-content;
  background-color: #00ffff;
`;

const ProfileButton = ({ user, notebooks }) => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  useEffect(() => {});
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
          <div className={styles.user}>
            <li className={styles.profileContent}>{user.username}</li>
            <li className={styles.profileContent}>{user.email}</li>
          </div>
          {notebooks &&
            notebooks.map((notebook) => (
              <div className={styles.linksWrapper}>
                <NavLink
                  className={styles.nav}
                  activeClassName={styles.activeNav}
                  to={`/notebooks/${notebook.id}`}
                  key={notebook.id}>
                  <li className={styles.link}>{notebook.title}</li>
                </NavLink>
              </div>
            ))}
        </ul>
      )}
    </div>
  );
};
export default ProfileButton;
