import React from "react";
import styles from "./NoteCard.module.css";

const NoteCard = ({ notes }) => {
  if (!notes.length) return null;
  return (
    <div className={styles.noteCardWrapper}>
      {notes &&
        notes.map((note) => (
          <span key={note.id} className={styles.wrapper}>
            <div className={styles.notebookTitle}>{note.Notebook?.title}</div>
            <div className={styles.noteTitle}>{note.title}</div>
            <div className={styles.noteContent}>{note.content}</div>
          </span>
        ))}
    </div>
  );
};

export default NoteCard;
