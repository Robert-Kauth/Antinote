import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import NotebookCard from "../Notebooks/NotebookCard";
import { deleteNotebook, loadNotebooks } from "../../store/notebooks";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const notebooks = useSelector((state) => Object.values(state.notebooks));

  return (
    <div className={styles.notebookContainer}>
      {notebooks.map((notebook) => (
        <div key={notebook.id} className={styles.notebook}>
          <div className={styles.link}>
            <Link to={`/notebooks/${notebook.id}`}>
              <p className={styles.titleText}>{notebook.title}</p>
            </Link>
            <button
              onClick={() => dispatch(deleteNotebook(notebook.id))}
              className={styles.delete}>
              Delete
            </button>
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
