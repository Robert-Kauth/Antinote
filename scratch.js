{
  notebook.Notes?.map((note) => (
    <span key={note.id} className={styles.wrapper}>
      <div className={styles.noteTitle}>{note.title}</div>
      <div className={styles.noteContent}>{note.content}</div>
      <span className={styles.buttonWrapper}>
        <button
          className={styles.deleteNote}
          onClick={() => dispatch(deleteNote(note.id, notebook.id))}>
          Delete Note
        </button>
        <span>
          <EditCardModal
            notebook={notebook}
            id={note.id}
            userId={userId}
            notebookId={notebook.id}
            title={note.title}
            content={note.content}
          />
        </span>
      </span>
    </span>
  ));
}
