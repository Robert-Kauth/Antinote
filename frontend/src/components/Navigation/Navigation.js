import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import styles from "./Navigation.module.css";
import Icon from "@mdi/react";
import { mdiHomeCircle } from "@mdi/js";
import styled from "styled-components";
import ProfileLinks from "./ProfileLinks";
import LogoutButton from "./Logout";
import ProfileButton from "./ProfileButton";

const StyledIcon = styled(Icon)`
  color: darkcyan;
  position: relative;
  left: 0;
`;

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);
  const notebooks = useSelector((state) => Object.values(state.notebooks));

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <div className={styles.homeProfile}>
          <NavLink activeClassName={styles.activeNav} exact to="/">
            <StyledIcon path={mdiHomeCircle} size={1.5} />
          </NavLink>
          <ProfileButton
            user={sessionUser}
            notebooks={notebooks}></ProfileButton>
        </div>
        <ProfileLinks />
        <LogoutButton />
      </>
    );
  } else {
    sessionLinks = (
      <div className={styles.login}>
        <span className={styles.loginModal}>
          <LoginFormModal />
        </span>
      </div>
    );
  }
  return (
    <nav className={styles.container}>
      {!isLoaded && (
        <NavLink activeClassName={styles.activeNav} exact to="/">
          <StyledIcon path={mdiHomeCircle} size={1} />
        </NavLink>
      )}
      {isLoaded && sessionLinks}
    </nav>
  );
};
export default Navigation;
