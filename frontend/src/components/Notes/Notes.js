import React from "react";
import NoteCard from "../Notebooks/NotebookCard";
import styles from "./Notes.module.css";
/*
TODO Note component should only show notes belonging to current notebook when displayed in notebooks route. In Notes route all notes in all notebooks belonging to the curent user should be displayed.
*/
const Notes = () => {
  return (
    <>
      <div className={styles.notebookCardWrapper}>
        <NoteCard />
      </div>
    </>
  );
};

export default Notes;
