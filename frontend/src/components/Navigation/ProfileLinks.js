import React from "react";
import { NavLink } from "react-router-dom";
import CreateModal from "../Notebooks/CreateModal";
import styles from "./Navigation.module.css";

export const ProfileLinks = () => {
  //TODO fix notebook link
  return (
    <div className={styles.profileLinksWrapper}>
      <NavLink to="/notes" activeClassName={styles.activeNav}>
        Notes
      </NavLink>
      <CreateModal className={styles.create} />
    </div>
  );
};

export default ProfileLinks;
