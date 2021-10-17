import React from "react";
import { NavLink } from "react-router-dom";
import CreateModal from "../Notebooks/CreateModal";
import CreateNoteModal from "../Notebooks/CreateNoteModal";
import SearchBar from "./Search";
import styles from "./Navigation.module.css";
import styled from "styled-components";

const StyledSearch = styled(SearchBar)`
  position: relative;
  left: 50vw;
  right: 50vw;
`;
export const ProfileLinks = () => {
  return (
    <div className={styles.profileLinksWrapper}>
      <span className={styles.searchbar}>
        <StyledSearch />
      </span>
      <div>
        <button className={styles.notesButton}>
          <NavLink
            to="/notes"
            className={styles.notes}
            activeClassName={styles.activeNav}>
            Notes
          </NavLink>
        </button>
        <CreateNoteModal className={styles.create} />
        <CreateModal className={styles.create} />
      </div>
    </div>
  );
};

export default ProfileLinks;
