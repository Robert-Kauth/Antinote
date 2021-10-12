import React, { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiCardSearchOutline } from "@mdi/js";
import styled from "styled-components";
import styles from "./SearchBar.module.css";

const Button = styled.button`
  border-radius: 10px;
`;

const SearchBar = () => {
  const [search, setSearch] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
  };

  useEffect(() => {});

  return (
    <span className={styles.searchBar}>
      <input type="search" name="searchbar" value={search} />
      <Button className={styles.searchButton} onClick={handleSearch}>
        <Icon className={styles.searchIcon} path={mdiCardSearchOutline} />
      </Button>
    </span>
  );
};

export default SearchBar;
