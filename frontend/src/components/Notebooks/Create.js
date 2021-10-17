import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Create.module.css";
import { addNotebook } from "../../store/notebooks";

const Create = ({ setShowModal }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState();
  const [validationErrors, setValidationErrors] = useState([]);
  const userId = useSelector((state) => state.session.user.id);

  const validate = () => {
    const validationErrors = [];
    if (!title) validationErrors.push("Please provide a notebook title.");
    else if (title.length > 255) {
      validationErrors.push("Title must not be greater then 255 characters");
    }
    return validationErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) return setValidationErrors(errors);

    const notebook = {
      userId,
      title,
    };
    dispatch(addNotebook(notebook));
    setShowModal(false);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {validationErrors.length > 0 && (
        <div className={styles.errors}>
          The following errors occured:
          <ul>
            {validationErrors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
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
