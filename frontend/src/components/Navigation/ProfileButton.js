import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import * as sessionActions from "../../store/session";
import Icon from "@mdi/react";
import { mdiAccountArrowDown, mdiAccount } from "@mdi/js";
import styled from "styled-components";

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

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <Button onClick={openMenu}>
        {!showMenu && (
          <Icon path={mdiAccountArrowDown} size={1} color="black" />
        )}
        {showMenu && <Icon path={mdiAccount} size={1} color="black" />}
      </Button>
      {showMenu && (
        <ul className="profileDropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
};
export default ProfileButton;
