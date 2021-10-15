import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditTitle from "./EditTitle";
import styles from "./EditTitle.module.css";

const TitleModal = ({ notebook }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={styles.editTitle} onClick={() => setShowModal(true)}>
        Edit Title
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTitle id={notebook} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default TitleModal;
