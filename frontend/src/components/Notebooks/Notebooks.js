import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TitleModal from "../Home/TitleModal";
import styles from "./Notebook.module.css";
import NotesbookCard from "./NotebookCard";
import Editor from "../Editor";
import { loadNotebooks } from "../../store/notebooks";
import { loadNotes } from "../../store/notes";

const NoteBooks = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notebook = useSelector((state) => state.notebooks[id]);
  const notes = useSelector((state) => state.notes);
  const [text, setText] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    dispatch(loadNotebooks());
    dispatch(loadNotes());
  }, [dispatch]);

  if (!notebook) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.notebooksContainer}>
      <header className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <p id="title">{notebook.title}</p>
          <TitleModal notebook={id} />
        </div>
      </header>
      <div className={styles.wrapper}>
        <NotesbookCard notebook={notebook} />
        <form className={styles.textAreaContainer} onSubmit={handleSubmit}>
          <div>
            <textarea
              name="note"
              cols="30"
              rows="9"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Create your new note here"></textarea>
            <div className={styles.crudButtons}>
              <button type="submit">Save To Notebook</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default NoteBooks;
