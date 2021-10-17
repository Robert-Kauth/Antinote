import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateNote from "./CreateNote";
import styles from "./CreateNote.module.css";

const CreateNoteModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className={styles.editTitle} onClick={() => setShowModal(true)}>
        Create Note
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateNote setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};
export default CreateNoteModal;
