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
      <div className={styles.searchbar}>
        <StyledSearch />
      </div>
      <span>
        <NavLink to="/notes" activeClassName={styles.activeNav}>
          Notes
        </NavLink>
      </span>
      <CreateNoteModal className={styles.create} />
      <CreateModal className={styles.create} />
    </div>
  );
};

export default ProfileLinks;
