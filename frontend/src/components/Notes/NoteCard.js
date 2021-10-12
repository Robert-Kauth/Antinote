import React from "react";
import styles from "./NoteCard.module.css";

//TODO make note content display list of notes cards in current notebook
const NoteCard = () => {
  return (
    <div className={styles.noteCardContainer}>
      <div>
        <p>NoteCard Title</p>
      </div>
      <div className={styles.noteContent}>
        <p>Note Content</p>
      </div>
    </div>
  );
};

export default NoteCard;
