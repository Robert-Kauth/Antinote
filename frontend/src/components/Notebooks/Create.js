import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Create.module.css";
import { addNotebook } from "../../store/notebooks";

const Create = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const userId = useSelector((state) => state.session.user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const notebook = {
      userId,
      title,
    };
    dispatch(addNotebook(notebook));
    setShowModal(false);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <fieldset>
        <legend>Name of New Notebook</legend>
        <div className={styles.input}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.buttonWrapper}>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
};

export default Create;
