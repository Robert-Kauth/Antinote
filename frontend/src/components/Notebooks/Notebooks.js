import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./Notebook.module.css";
import NotesbookCard from "./NotebookCard";
import Editor from "../Editor";
import { loadNotebooks } from "../../store/notebooks";

const NoteBooks = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notebook = useSelector((state) => state.notebooks[id]);
  const [text, setText] = useState();

  useEffect(() => {
    dispatch(loadNotebooks());
  }, [dispatch]);

  const handleSave = (e) => {
    e.preventDefault();
    setText();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  //Todo dispatch action to edit current note
  const handleEdit = (e) => {
    e.preventDefault();
  };
  if (!notebook) return null;
  //TODO make create, edit, delete in dropdown menu dynamic
  return (
    <div className={styles.notebooksContainer}>
      <header>
        <p className={styles.title}>{notebook.title}</p>
      </header>
      <div className={styles.wrapper}>
        <NotesbookCard notebook={notebook} />
        <main className={styles.textAreaContainer}>
          <div>
            <textarea
              name="note"
              cols="30"
              rows="9"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Create your new note here"></textarea>
            <div className={styles.crudButtons}>
              <button onClick={handleSubmit}>Save To Notebook</button>
              <button onClick={handleEdit}>Edit Note</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
export default NoteBooks;
