import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import HomeNotebookCards from "./HomeNotebookCards";
import { deleteNotebook, loadNotebooks } from "../../store/notebooks";
import { loadNotes } from "../../store/notes";
import { Link } from "react-router-dom";
import TitleModal from "./TitleModal";

const Home = ({ user }) => {
  const dispatch = useDispatch();
  const notebooks = useSelector((state) => Object.values(state.notebooks));
  const notes = useSelector((state) => Object.values(state.notes));

  useEffect(() => {
    dispatch(loadNotebooks());
    dispatch(loadNotes());
  }, [dispatch]);

  if (!notebooks.length) return null;
  return (
    <div className={styles.notebookContainer}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>NoteBooks</p>
      </div>
      {notebooks &&
        notebooks.map((notebook) => (
          <div key={notebook.id} className={styles.notebook}>
            <div className={styles.link}>
              <p className={styles.titleText} id="title">
                {notebook.title}
              </p>
              <div className={styles.buttonContainer}>
                <span className={styles.deleteContainer}>
                  <button
                    className={styles.deleteButton}
                    onClick={() => dispatch(deleteNotebook(notebook.id))}>
                    Delete
                  </button>
                </span>
                <span className={styles.modalContainer}>
                  <TitleModal notebook={notebook.id}></TitleModal>
                </span>
              </div>
            </div>
            <span>
              <HomeNotebookCards notebook={notebook}></HomeNotebookCards>
            </span>
          </div>
        ))}
    </div>
  );
};

export default Home;
