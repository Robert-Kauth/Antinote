import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditCard from "./EditCard";
import styles from "./EditCard.module.css";

const EditCardModal = ({
  id,
  userId,
  notebookId,
  title,
  content,
  notebook,
}) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={styles.editTitle} onClick={() => setShowModal(true)}>
        Edit Note
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCard
            id={id}
            userId={userId}
            notebookId={notebookId}
            title={title}
            content={content}
            notebook={notebook}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
};

export default EditCardModal;
