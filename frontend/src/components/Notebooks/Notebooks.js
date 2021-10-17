import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TitleModal from "../Home/TitleModal";
import styles from "./Notebook.module.css";
import NotesbookCard from "./NotebookCard";
import { loadNotebooks } from "../../store/notebooks";

const NoteBooks = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notebook = useSelector((state) => state.notebooks[id]);

  useEffect(() => {
    dispatch(loadNotebooks());
  }, [dispatch]);

  if (!notebook) return null;

  return (
    <div className={styles.notebooksContainer}>
      <header className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <p id="title">{notebook.title}</p>
          <TitleModal notebook={id} />
        </div>
      </header>
      <div className={styles.cardWrapper}>
        <NotesbookCard notebook={notebook} />
      </div>
    </div>
  );
};
export default NoteBooks;
