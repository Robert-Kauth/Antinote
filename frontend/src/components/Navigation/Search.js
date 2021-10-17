import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import styled from "styled-components";
import styles from "./SearchBar.module.css";

const Button = styled.button`
  border-radius: 5px;
`;

const SearchBar = () => {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {});

  return (
    <span className={styles.searchBar}>
      <form className={styles.searchForm}>
        <input type="search" name="searchbar" value={search} />
        <Button className={styles.searchButton} onClick={handleSearch}>
          <Icon className={styles.searchIcon} path={mdiMagnify} />
        </Button>
      </form>
    </span>
  );
};

export default SearchBar;
