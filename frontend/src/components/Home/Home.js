import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import NotebookCard from "../Notebooks/NotebookCard";
import { loadNotebooks } from "../../store/notebooks";

const Home = () => {
  const dispatch = useDispatch();
  const notebooks = useSelector((state) => Object.values(state.notebooks));

  useEffect(() => {
    dispatch(loadNotebooks());
  }, [dispatch]);

  return (
    <div className={styles.notebookContainer}>
      {notebooks.map((notebook) => (
        <div key={notebook.id} className={styles.notebook}>
          <h2 className={styles.titleText}>{notebook.title}</h2>
          <span>
            <NotebookCard notebook={notebook}></NotebookCard>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Home;
