import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNotes } from "../../store/notes";
import styles from "./NoteCard.module.css";

//TODO make note content display list of notes cards in current notebook
const NoteCard = ({ notebook }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => Object.values(state.notes));

  useEffect(() => {
    dispatch(loadNotes());
  }, [dispatch]);
  return (
    <span className={styles.noteCardContainer}>
      {notes.map((note) => (
        <div key={note.id} className={styles.noteWrapper}>
          <div>
            <div className={styles.noteTitle}>{note.title}</div>
          </div>
          <div>
            <div className={styles.noteContent}>{note.content}</div>
          </div>
        </div>
      ))}
    </span>
  );
};

export default NoteCard;
