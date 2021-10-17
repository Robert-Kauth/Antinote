import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadNotebooks } from "../../store/notebooks";
import styles from "./CreateNote.module.css";

const CreateNote = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [notebookName, setNotebookName] = useState("");

  const notebooks = useSelector((state) => Object.values(state.notebooks));

  useEffect(() => {
    dispatch(loadNotebooks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!notebooks.length) return null;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.field}>
        <legend className={styles.field}>Create a new note</legend>
        <div className={styles.textAreaContainer}>
          <textarea
            name="note"
            cols="30"
            rows="9"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Create your new note here"
            onFocus={(e) => (e.target.placeholder = "")}></textarea>
        </div>
        <div className={styles.selectContainer}>
          <label htmlFor="notebooks" className={styles.selectLabel}>
            Notebook to Save to:
          </label>
          <select name="notebooks">
            {notebooks.map((notebook) => (
              <option key={notebook.id} value={notebookName}>
                {notebook.title}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.submit}>
          <button type="submit">Save To Notebook</button>
        </div>
      </fieldset>
    </form>
  );
};
export default CreateNote;
