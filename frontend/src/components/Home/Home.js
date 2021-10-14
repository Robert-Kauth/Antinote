import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import NotebookCard from "../Notebooks/NotebookCard";
import { deleteNotebook, loadNotebooks } from "../../store/notebooks";
import { Link } from "react-router-dom";
import { loadNotes } from "../../store/notes";
import TitleModal from "./TitleModal";

const Home = () => {
  const dispatch = useDispatch();
  const notebooks = useSelector((state) => Object.values(state.notebooks));

  useEffect(() => {
    dispatch(loadNotebooks());
    dispatch(loadNotes());
  }, [dispatch]);

  if (!notebooks.length) return null;
  return (
    <div className={styles.notebookContainer}>
      {notebooks.map((notebook) => (
        <div key={notebook.id} className={styles.notebook}>
          <div className={styles.link}>
            <Link to={`/notebooks/${notebook.id}`}>
              <p className={styles.titleText} id="title">
                {notebook.title}
              </p>
            </Link>
            <span className={styles.delete}>
              <button
                className={styles.deleteButton}
                onClick={() => dispatch(deleteNotebook(notebook.id))}>
                Delete
              </button>
            </span>
            <span className={styles.editModal}>
              <TitleModal
                className={styles.modalButton}
                notebook={notebook.id}></TitleModal>
            </span>
          </div>
          <span>
            <NotebookCard notebook={notebook}></NotebookCard>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Home;
