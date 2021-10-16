import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditCardModal from "./EditCardModal";
import { loadNotebooks } from "../../store/notebooks";
import { deleteNote, loadNotes } from "../../store/notes";
import styles from "./NoteBookCard.module.css";

const NoteBookCard = ({ notebook }) => {
  const dispatch = useDispatch();
  // const notes = useSelector((state) => Object.values(state.notes));
  const userId = useSelector((state) => state.session.user.id);

  //! may note be needed anymore
  // useEffect(() => {
  //   dispatch(loadNotebooks());
  //   dispatch(loadNotes());
  // }, [dispatch]);

  if (!notebook) return null;

  return (
    <div>
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
