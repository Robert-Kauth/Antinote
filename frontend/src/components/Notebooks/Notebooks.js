import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TitleModal from "../Home/TitleModal";
import styles from "./Notebook.module.css";
import NotesbookCard from "./NotebookCard";
import { loadNotebooks } from "../../store/notebooks";
import { getNotes } from "../../store/notes";

const NoteBooks = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notes = useSelector((state) => Object.values(state.notes));
  const notebook = useSelector((state) => state.notebooks[id]);

  useEffect(() => {
    dispatch(loadNotebooks());
    dispatch(getNotes(+id));
  }, [dispatch, id]);

  if (!notes.length || !notebook) return null;

  return (
    <div className={styles.notebooksContainer}>
      <header className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{notebook.title}</p>
        </div>
        <TitleModal notebook={id} />
      </header>
      <div className={styles.cardWrapper}>
        <NotesbookCard notebook={notebook} notes={notes} />
      </div>
    </div>
  );
};
export default NoteBooks;
