import React from "react";
import { NavLink } from "react-router-dom";
import CreateModal from "../Notebooks/CreateModal";
import CreateNoteModal from "../Notebooks/CreateNoteModal";
import styles from "./Navigation.module.css";

export const ProfileLinks = () => {
  return (
    <div className={styles.profileLinksWrapper}>
      <CreateNoteModal className={styles.create} />
      <CreateModal className={styles.create} />
    </div>
  );
};

export default ProfileLinks;
