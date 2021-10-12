import React from "react";
import NoteCard from "../Notes/NoteCard";
import styles from "./NoteBookCard.module.css";

const NoteBookCard = () => {
  return (
    <div className={styles.noteBookWrapper}>
      <div>
        <p>NoteBook title</p>
      </div>
      <div className={styles.noteCardWrapper}>
        <span>
          <NoteCard />
          <NoteCard />
        </span>
      </div>
    </div>
  );
};
export default NoteBookCard;
