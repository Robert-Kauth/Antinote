import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import styles from "./Navigation.module.css";
import Icon from "@mdi/react";
import { mdiHomeCircle } from "@mdi/js";
import styled from "styled-components";
import ProfileLinks from "./ProfileLinks";
import SearchBar from "./Search";
import LogoutButton from "./Logout";

const StyledIcon = styled(Icon)`
  color: darkcyan;
  position: relative;
  left: 0;
`;
const StyledSearch = styled(SearchBar)`
  position: relative;
  left: 50vw;
  right: 50vw;
`;

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <span>
          <NavLink to="/notes" activeClassName={styles.activeNav}>
            Notes
          </NavLink>
        </span>
        <span>
          <ProfileLinks />
        </span>
        <span>
          <StyledSearch />
        </span>
        <span className={styles.linksContainer}>
          <LogoutButton />
        </span>
      </>
    );
  } else {
    sessionLinks = (
      <div>
        <span className={styles.loginModal}>
          <LoginFormModal />
        </span>
      </div>
    );
  }
  return (
    <nav className={styles.container}>
      <NavLink activeClassName={styles.activeNav} exact to="/">
        <StyledIcon path={mdiHomeCircle} size={1} />
      </NavLink>
      {isLoaded && sessionLinks}
    </nav>
  );
};
export default Navigation;
