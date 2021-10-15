import React from "react";
import NoteCard from "./NoteCard";
import styles from "./Notes.module.css";

const Notes = () => {
  return (
    <>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>All User Notes</p>
      </div>
      <NoteCard></NoteCard>
    </>
  );
};

export default Notes;
