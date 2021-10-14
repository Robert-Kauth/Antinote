import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import TitleModal from "../Home/TitleModal";
import styles from "./Notebook.module.css";
import NotesbookCard from "./NotebookCard";
import Editor from "../Editor";
import { loadNotebooks, updateNotebook } from "../../store/notebooks";
import { updateNote } from "../../store/notes";

const NoteBooks = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notebook = useSelector((state) => state.notebooks[id]);
  console.log(notebook);
  const [text, setText] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    dispatch(loadNotebooks());
  }, [dispatch]);

  if (!notebook) return null;

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
    const newTitle = {
      title: setTitle(e.target.value),
    };
    dispatch(updateNotebook(newTitle, notebook.id));
  };

  //TODO make create, edit, delete in dropdown menu dynamic
  return (
    <div className={styles.notebooksContainer}>
      <header className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <p id="title" value={title}>
            {notebook.title}
          </p>
          <TitleModal notebook={id} />
        </div>
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
