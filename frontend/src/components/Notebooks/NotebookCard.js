import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadNotebooks } from "../../store/notebooks";
import { deleteNote, loadNotes } from "../../store/notes";
import styles from "./NoteBookCard.module.css";

const NoteBookCard = ({ notebook }) => {
  const dispatch = useDispatch();
  // console.log(notebook, "####################");
  const notes = useSelector((state) => Object.values(state.notes));
  // console.log(notes, "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&");
  const notebooks = useSelector((state) => state.notebooks);

  useEffect(() => {
    dispatch(loadNotebooks());
    dispatch(loadNotes());
  }, [dispatch]);
  //Todo dispatch action to edit current note
  const handleEdit = (e) => {
    e.preventDefault();
  };
  if (!notebook || !notes.length) return null;

  return (
    <div>
      {notebook.Notes?.map((note) => (
        <span key={note.id} className={styles.wrapper}>
          <div className={styles.noteTitle}>{note.title}</div>
          <div className={styles.noteContent}>{note.content}</div>
          <span>
            <button onClick={() => dispatch(deleteNote(note.id, notebook.id))}>
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
