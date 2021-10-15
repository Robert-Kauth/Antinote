import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadNotes } from "../../store/notes";
import styles from "./NoteCard.module.css";

//TODO make note content display list of notes cards in current notebook
const NoteCard = ({ notebook }) => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => Object.values(state.notes));
  console.log(notes);
  return (
    <div>
      {notes.map((note) => (
        <span key={note.id} className={styles.wrapper}>
          <div className={styles.noteTitle}>{note.title}</div>
          <div className={styles.noteContent}>{note.content}</div>
        </span>
      ))}
    </div>
  );
};

export default NoteCard;
