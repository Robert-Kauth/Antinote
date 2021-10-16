import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./EditTitle.module.css";
import { loadNotebooks, updateNotebook } from "../../store/notebooks";

const EditTitle = ({ id, setShowModal }) => {
  const dispatch = useDispatch();
  const notebook = useSelector((state) => state.notebooks[id]);

  const [title, setTitle] = useState("");
  const [placeholder] = useState(notebook.title);

  useEffect(() => {
    dispatch(loadNotebooks());
  }, [dispatch]);

  const handleEdit = (e) => {
    e.preventDefault();
    const newTitle = {
      title,
    };
    dispatch(updateNotebook(newTitle, notebook.id));
    setShowModal(false);
  };
  return (
    <form className={styles.form} onSubmit={handleEdit}>
      <fieldset className={styles.field}>
        <legend className={styles.field}>
          Please Create a new Title for your Notebook
        </legend>
        <div className={styles.inputContainer}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder={placeholder}
            onFocus={(e) => (e.target.placeholder = "")}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
};
export default EditTitle;
