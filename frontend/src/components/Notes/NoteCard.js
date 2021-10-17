import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNotes } from "../../store/notes";
import styles from "./NoteCard.module.css";

const NoteCard = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => Object.values(state.notes));

  useEffect(() => {
    dispatch(loadNotes());
  }, [dispatch]);

  if (!notes.length) return null;
  return (
    <div className={styles.globalWrapper}>
      <div className={styles.notesWrapper}>
        {notes &&
          notes.map((note) => (
            <span key={note.id} className={styles.wrapper}>
              <div className={styles.notebookTitle}>{note.Notebook?.title}</div>
              <div className={styles.noteTitle}>{note.title}</div>
              <div className={styles.noteContent}>{note.content}</div>
            </span>
          ))}
      </div>
    </div>
  );
};

export default NoteCard;
