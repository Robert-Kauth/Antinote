import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./EditTitle.module.css";
import { loadNotebooks, updateNotebook } from "../../store/notebooks";

const EditTitle = ({ id }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();

  const notebook = useSelector((state) => state.notebooks[id]);

  useEffect(() => {
    dispatch(loadNotebooks());
  }, [dispatch]);

  const handleEdit = (e) => {
    e.preventDefault();
    const newTitle = {
      title,
    };
    dispatch(updateNotebook(newTitle, notebook.id));
  };
  return (
    <div className={styles.editModalWrapper}>
      <label htmlFor="title">Please Create a new Title for your Notebook</label>
      <input
        className={styles.input}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
      />
      <button type="submit" onClick={handleEdit}>
        Submit
      </button>
    </div>
  );
};
export default EditTitle;
