import React from "react";
import NoteCard from "../Notes/NoteCard";
import styles from "./NoteBookCard.module.css";

const NoteBookCard = ({ notebook }) => {
  return (
    <div className={styles.noteBookWrapper}>
      <div className={styles.noteCardWrapper}>
        <span className={styles.noteCardWrapper}>
          <NoteCard notebook={notebook} />
        </span>
      </div>
    </div>
  );
};
export default NoteBookCard;
