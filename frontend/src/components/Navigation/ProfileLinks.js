import React from "react";
import { NavLink } from "react-router-dom";
import CreateModal from "../Notebooks/CreateModal";
import CreateNoteModal from "../Notebooks/CreateNoteModal";
import styles from "./Navigation.module.css";

export const ProfileLinks = () => {
  return (
    <div className={styles.profileLinksWrapper}>
      <NavLink to="/notes" activeClassName={styles.activeNav}>
        Notes
      </NavLink>
      <CreateNoteModal className={styles.create} />
      <CreateModal className={styles.create} />
    </div>
  );
};

export default ProfileLinks;
