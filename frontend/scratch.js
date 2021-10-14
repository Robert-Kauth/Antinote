const [title, setTitle] = useState({notebook.title});
<input className={styles.title} type="text" value={title} />;

<input
            className={styles.title}
            type="text"
            value={title}
            onChange={handleEdit}
            placeholder="New Title Here"
          />
