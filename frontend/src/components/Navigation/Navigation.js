import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import styles from "./Navigation.module.css";
import Icon from "@mdi/react";
import { mdiHomeCircle } from "@mdi/js";
import styled from "styled-components";

const StyledIcon = styled(Icon)`
  color: darkgreen;
  padding-top: 10px;
`;

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <div>
        <span className={styles.navLink}>
          <LoginFormModal />
        </span>
      </div>
    );
  }
  return (
    <nav className={styles.container}>
      <NavLink activeClassName={styles.activeNav} exact to="/">
        <StyledIcon path={mdiHomeCircle} size={2} />
      </NavLink>
      {isLoaded && sessionLinks}
    </nav>
  );
};
export default Navigation;
