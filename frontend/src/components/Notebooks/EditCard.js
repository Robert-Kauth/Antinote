import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../../store/notes";
import styles from "./EditCard.module.css";

const EditCard = ({ id, userId, notebookId, title, content, setShowModal }) => {
  const dispatch = useDispatch();
  const [newContent, setNewContent] = useState();
  const [placeholder] = useState(content);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      id,
      userId,
      notebookId,
      title,
      newContent,
    };
    dispatch(updateNote(newNote));
    setShowModal(false);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <fieldset className={styles.field}>
        <legend className={styles.field}>Edit Your Note</legend>
        <textarea
          cols="30"
          rows="10"
          value={newContent}
          placeholder={placeholder}
          onFocus={(e) => (e.target.placeholder = "")}
          onChange={(e) => setNewContent(e.target.value)}></textarea>
        <div className={styles.buttonContainer}>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  );
};
export default EditCard;
