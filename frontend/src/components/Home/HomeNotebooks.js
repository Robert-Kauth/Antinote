import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TitleModal from "../Home/TitleModal";
import styles from "./HomeNoteBookCards.module.css";
import HomeNotebookCards from "./HomeNotebookCards";
import { loadNotebooks } from "../../store/notebooks";
import { loadNotes } from "../../store/notes";

const HomeNotebooks = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notebook = useSelector((state) => state.notebooks[id]);

  useEffect(() => {
    dispatch(loadNotebooks());
    dispatch(loadNotes());
  }, [dispatch]);

  if (!notebook) return null;

  return (
    <div className={styles.notebooksContainer}>
      <header className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <p className={styles.title}>{notebook.title}</p>
        </div>
        <TitleModal notebook={id} />
      </header>
      <div className={styles.cardWrapper}>
        <HomeNotebookCards notebook={notebook} />
      </div>
    </div>
  );
};
export default HomeNotebooks;
