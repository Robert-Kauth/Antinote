import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNotes } from "../../store/notes";
import NoteCard from "./NoteCard";
import styles from "./Notes.module.css";

const Notes = () => {
  const dispatch = useDispatch();

  const notes = useSelector((state) => Object.values(state.notes));

  useEffect(() => {
    dispatch(loadNotes());
  }, [dispatch]);

  if (!notes.length) return null;
  return (
    <div className={styles.background}>
      {notes && (
        <div>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>Notes</p>
          </div>
          <NoteCard notes={notes} />
        </div>
      )}
    </div>
  );
};

export default Notes;
