import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import "./Navigation.module.css";
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
      <>
        <LoginFormModal />
        <StyledNavLink to="/signup">Sign Up</StyledNavLink>
      </>
    );
  }
  return (
    <ul>
      <li>
        <StyledNavLink exact to="/">
          Home
        </StyledNavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
};
export default Navigation;
