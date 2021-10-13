import React, { useState } from "react";

import Icon from "@mdi/react";
import styled from "styled-components";
import { mdiMenu, mdiMenuOpen } from "@mdi/js";
import styles from "./Notebook.module.css";
import NotesbookCard from "./NotebookCard";
import Editor from "../Editor";

const Button = styled.button`
  display: flex;
  border-radius: 5px;
  height: 25px;
  width: 30px;
`;

const NoteBooks = () => {
  const [showMenu, setShowMenu] = useState(false);

  const show = () => {
    return setShowMenu(!showMenu);
  };

  //TODO make create, edit, delete in dropdown menu dynamic
  return (
    <div className={styles.notebooksContainer}>
      <header>
        <p className={styles.title}>NoteBook</p>
      </header>
      <div className={styles.wrapper}>
        <span className={styles.currentNotes}>
          <NotesbookCard />
        </span>
        <main className={styles.textAreaContainer}>
          <div className={styles.editorWrapper}>
            <Editor />
          </div>
          <textarea name="note" cols="30" rows="9"></textarea>
          <span className={styles.menuContainer}>
            {!showMenu && (
              <Button onClick={show}>
                <Icon path={mdiMenu} size={0.5}></Icon>
              </Button>
            )}
            {showMenu && (
              <Button onClick={show}>
                <Icon path={mdiMenuOpen} size={0.5}></Icon>
              </Button>
            )}

            {showMenu && (
              <ul className={styles.menuContent}>
                <li className={styles.listItem}>create</li>
                <li className={styles.listItem}>edit</li>
                <li className={styles.listItem}>delete</li>
              </ul>
            )}
          </span>
        </main>
      </div>
    </div>
  );
};
export default NoteBooks;
