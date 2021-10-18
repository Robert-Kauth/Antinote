import React from "react";
import CreateModal from "../Notebooks/CreateModal";
import CreateNoteModal from "../Notebooks/CreateNoteModal";
import styles from "./Navigation.module.css";

export const ProfileLinks = () => {
  return (
    <div className={styles.profileLinksWrapper}>
      <div>
        <CreateNoteModal className={styles.create} />
        <CreateModal className={styles.create} />
      </div>
    </div>
  );
};

export default ProfileLinks;
