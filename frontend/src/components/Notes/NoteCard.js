import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadNotebooks } from "../../store/notebooks";
import { loadNotes } from "../../store/notes";
import styles from "./NoteCard.module.css";

const NoteCard = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => Object.values(state.notes));
  const notebooks = useSelector((state) => Object.values(state.notebooks));
  console.log(notebooks);
  useEffect(() => {
    dispatch(loadNotebooks());
    dispatch(loadNotes());
  }, [dispatch]);

  if (!notes.length || !notebooks.length) return null;
  // This doesn't work at all
  return (
    <div className={styles.noteCardWrapper}>
      {notebooks.Notes?.map((note, i) => (
        <span key={i} className={styles.wrapper}>
          <div className={styles.notebookTitle}>{note.title}</div>
          <div className={styles.noteTitle}>{note.title}</div>
          <div className={styles.noteContent}>{note.content}</div>
        </span>
      ))}
    </div>
  );

  // This return works but doesn't update properly when notes/ notebooks are deleted
  // return (
  //   <div className={styles.noteCardWrapper}>
  //     {notes &&
  //       notes.map((note) => (
  //         <span key={note.id} className={styles.wrapper}>
  //           <div className={styles.notebookTitle}>{note.Notebook?.title}</div>
  //           <div className={styles.noteTitle}>{note.title}</div>
  //           <div className={styles.noteContent}>{note.content}</div>
  //         </span>
  //       ))}
  //   </div>
  // );
};

export default NoteCard;
