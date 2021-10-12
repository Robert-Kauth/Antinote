import React from "react";
import styles from "./Home.module.css";
import NoteCard from "../Notes/NoteCard";
const Home = () => {
  //Todo make h2 title dynamic

  return (
    <div className={styles.notebookContainer}>
      <div>
        <h2>Title of Most recently edited notebook</h2>
      </div>
      <div>
        <NoteCard></NoteCard>
      </div>
    </div>
  );
};

export default Home;
