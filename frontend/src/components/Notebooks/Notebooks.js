import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Icon from "@mdi/react";
import styled from "styled-components";
import { mdiMenu, mdiMenuOpen } from "@mdi/js";
import styles from "./Notebook.module.css";
import NotesbookCard from "./NotebookCard";
import Editor from "../Editor";
import { loadNotebooks } from "../../store/notebooks";

const Button = styled.button`
  display: flex;
  border-radius: 5px;
  height: 25px;
  width: 30px;
`;

const NoteBooks = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const notebook = useSelector((state) => state.notebooks[id]);
  const [showMenu, setShowMenu] = useState(false);
  const [text, setText] = useState();

  // useEffect(() => {
  //   dispatch(loadNotebooks());
  // }, [dispatch]);

  const show = () => {
    return setShowMenu(!showMenu);
  };

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
              onChange={handleSave}
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
