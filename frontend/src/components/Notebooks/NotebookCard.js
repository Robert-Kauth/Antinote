import React from "react";
import { useDispatch, useSelector } from "react-redux";
import EditCardModal from "./EditCardModal";
import { deleteNote } from "../../store/notes";

import styles from "./NoteBookCard.module.css";

const NoteBookCard = ({ notebook, notes }) => {
  console.log(notes, "@@@@@@@@@@@@@@@@@@@");
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.session.user?.id);

  return (
    <div className={styles.cardWrapper}>
      {notebook.Notes?.map((note) => (
        <span key={note.id} className={styles.wrapper}>
          <div className={styles.noteTitle}>{note.title}</div>
          <div className={styles.noteContent}>{note.content}</div>
          <span className={styles.buttonWrapper}>
            <button
              className={styles.deleteNote}
              onClick={() => dispatch(deleteNote(note.id, notebook.id))}>
              Delete Note
            </button>
            <span>
              <EditCardModal
                notebook={notebook}
                id={note.id}
                userId={userId}
                notebookId={notebook.id}
                title={note.title}
                content={note.content}
              />
            </span>
          </span>
        </span>
      ))}
    </div>
  );
};
export default NoteBookCard;
