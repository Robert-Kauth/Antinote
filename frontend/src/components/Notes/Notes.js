import React from "react";
import NoteBookCard from "../Notebooks/NotebookCard";
import styles from "./Notes.module.css";
/*
TODO Note component should only show notes belonging to current notebook when displayed in notebooks route. In Notes route all notes in all notebooks belonging to the curent user should be displayed.
*/
const Notes = () => {
  return (
    <>
      <h1>Hello from notes</h1>
      <div className={styles.notebookCardWrapper}>
        <NoteBookCard />
        <NoteBookCard />
      </div>
    </>
  );
};

export default Notes;
