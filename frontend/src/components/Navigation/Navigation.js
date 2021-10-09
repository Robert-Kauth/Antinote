import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import style from "./Navigation.module.css";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  padding: 0 5px;
  font-size: 25px;
`;

const Navigation = ({ isLoaded }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
  } else {
    sessionLinks = (
      <nav className={style.container}>
        <span className={style.navLink}>
          <LoginFormModal />
        </span>
        <span className={style.navLink}>
          <NavLink activeClassName={style.activeNav} to="/signup">
            Sign Up
          </NavLink>
        </span>
      </nav>
    );
  }
  return (
    <nav className={style.container}>
      <span className={style.navLink}>
        <NavLink activeClassName={style.activeNav} exact to="/">
          Home
        </NavLink>
      </span>
      <span>{isLoaded && sessionLinks}</span>
    </nav>
  );
};
export default Navigation;
