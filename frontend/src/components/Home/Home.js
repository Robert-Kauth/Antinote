import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import NotebookCard from "../Notebooks/NotebookCard";
import { deleteNotebook, loadNotebooks } from "../../store/notebooks";
import { Link } from "react-router-dom";
import TitleModal from "./TitleModal";
import ProfileButton from "../Navigation/ProfileButton";

const Home = ({ user }) => {
  const dispatch = useDispatch();
  const notebooks = useSelector((state) => Object.values(state.notebooks));

  useEffect(() => {
    dispatch(loadNotebooks());
  }, [dispatch]);

  if (!notebooks.length) return null;
  return (
    <div className={styles.notebookContainer}>
      <div>
        <ProfileButton user={user} notebooks={notebooks}></ProfileButton>
      </div>
      {notebooks &&
        notebooks.map((notebook) => (
          <div key={notebook.id} className={styles.notebook}>
            <div className={styles.link}>
              <Link to={`/notebooks/${notebook.id}`}>
                <p className={styles.titleText} id="title">
                  {notebook.title}
                </p>
              </Link>
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
              <NotebookCard notebook={notebook}></NotebookCard>
            </span>
          </div>
        ))}
    </div>
  );
};

export default Home;
