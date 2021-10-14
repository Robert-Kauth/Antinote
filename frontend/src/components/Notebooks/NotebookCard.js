import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadNotes } from "../../store/notes";
import styles from "./NoteBookCard.module.css";

const NoteBookCard = ({ notebook }) => {
  //! notebook is undefined here
  const dispatch = useDispatch();
  const notes = useSelector((state) => Object.values(state.notes));

  const notebookNotes = notes.filter((note) => note.notebookId === note.id);
  //!loadNotes 2
  // useEffect(() => {
  //   dispatch(loadNotes());
  // }, [dispatch]);

  //Todo dispatch action to delete current note
  const handleDelete = (e) => {
    e.preventDefault();
  };

  //Todo dispatch action to edit current note
  const handleEdit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {notebookNotes.map((note) => (
        <span key={note.id} className={styles.wrapper}>
          <div className={styles.noteTitle}>{note.title}</div>
          <div className={styles.noteContent}>{note.content}</div>
          <span>
            <button onClick={handleDelete}>Delete Note</button>
            <button onClick={handleEdit}>Edit Note</button>
          </span>
        </span>
      ))}
    </div>
  );
};
export default NoteBookCard;
