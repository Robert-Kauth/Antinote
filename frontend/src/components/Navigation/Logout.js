import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import styles from "./LogoutButton.module.css";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push("/");
  };
  return (
    <div className={styles.logoutContainer}>
      <button className={styles.logout} onClick={logout}>
        Log Out
      </button>
    </div>
  );
};
export default LogoutButton;
