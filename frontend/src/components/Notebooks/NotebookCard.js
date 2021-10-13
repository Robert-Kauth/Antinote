import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNotes } from "../../store/notes";
import styles from "./NoteBookCard.module.css";

const NoteBookCard = ({ notebook }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => Object.values(state.notes));

  const notebookNotes = notes.filter((note) => note.notebookId === notebook.id);
  useEffect(() => {
    dispatch(loadNotes());
  }, [dispatch]);
  return (
    <div>
      {notebookNotes.map((note) => (
        <span key={notebookNotes.id} className={styles.wrapper}>
          <div className={styles.noteTitle}>{note.title}</div>
          <div className={styles.noteContent}>{note.content}</div>
        </span>
      ))}
    </div>
  );
};
export default NoteBookCard;
