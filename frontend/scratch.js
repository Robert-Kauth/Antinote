<div className={styles.menuContainer}>
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
      <li className={styles.listItem}>
        <button className={styles.listItem}>Save</button>
      </li>
      <li className={styles.listItem}>
        <button>Edit</button>
      </li>
      <li className={styles.listItem}>
        <button>Delete</button>
      </li>
    </ul>
  )}
</div>;
