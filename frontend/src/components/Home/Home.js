import React from "react";
import styles from "./Home.module.css";
import NoteCard from "../Notes/NoteCard";
const Home = () => {
  //Todo make h2 title dynamic

  return (
    <div className={styles.notebookContainer}>
      <div className={styles.titleContainer}>
        <h2 className={styles.titleText}>
          Title of Most recently edited notebook
        </h2>
      </div>
      <NoteCard></NoteCard>
    </div>
  );
};

export default Home;
