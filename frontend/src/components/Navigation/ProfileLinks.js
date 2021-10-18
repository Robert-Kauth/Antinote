import React from "react";
import { NavLink } from "react-router-dom";
import CreateModal from "../Notebooks/CreateModal";
import CreateNoteModal from "../Notebooks/CreateNoteModal";
import styles from "./Navigation.module.css";

export const ProfileLinks = () => {
  return (
    <div className={styles.profileLinksWrapper}>
      <div>
        <button className={styles.notesButton}>
          <NavLink
            to="/notes"
            className={styles.notes}
            activeClassName={styles.activeNav}>
            Notes
          </NavLink>
        </button>
        <CreateNoteModal className={styles.create} />
        <CreateModal className={styles.create} />
      </div>
    </div>
  );
};

export default ProfileLinks;
