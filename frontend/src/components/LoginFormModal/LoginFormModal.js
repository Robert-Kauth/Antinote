import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import styles from "./LoginForm.module.css";

const LoginFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className={styles.modalButton} onClick={() => setShowModal(true)}>
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LoginFormModal;
