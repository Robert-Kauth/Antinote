import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export const ProfileLinks = () => {
  return (
    <div>
      <NavLink activeClassName={styles.activeNav} to="/api/notebooks">
        Notebooks
      </NavLink>
      <NavLink activeClassName={styles.activeNav} to="/api/notes">
        Notes
      </NavLink>
    </div>
  );
};

export default ProfileLinks;
