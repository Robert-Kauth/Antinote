import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote, loadNotes } from "../../store/notes";
import styles from "./NoteBookCard.module.css";

const NoteBookCard = ({ notebook }) => {
  console.log(notebook, "@@@@@@@@@@@@@@@@@@");
  const dispatch = useDispatch();

  //Todo dispatch action to edit current note
  const handleEdit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      {notebook.Notes.map((note) => (
        <span key={note.id} className={styles.wrapper}>
          <div className={styles.noteTitle}>{note.title}</div>
          <div className={styles.noteContent}>{note.content}</div>
          <span>
            <button onClick={() => dispatch(deleteNote(note.id))}>
              Delete Note
            </button>
            <button onClick={handleEdit}>Edit Note</button>
          </span>
        </span>
      ))}
    </div>
  );
};
export default NoteBookCard;
