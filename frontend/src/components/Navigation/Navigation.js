import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import style from "./Navigation.module.css";
import SignupFormModal from "../SignupFormModal";
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
      <nav className={style.container}>
        <span className={style.navLink}>
          <LoginFormModal />
        </span>
        <span className={style.navLink}>
          <SignupFormModal />
        </span>
      </nav>
    );
  }
  return (
    <nav className={style.container}>
      <NavLink activeClassName={style.activeNav} exact to="/">
        <StyledIcon path={mdiHomeCircle} size={2} />
      </NavLink>
      <span>{isLoaded && sessionLinks}</span>
    </nav>
  );
};
export default Navigation;
