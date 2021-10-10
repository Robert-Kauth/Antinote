import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupForm";
import style from "./SignupForm.module.css";

const SignupFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className={style.titleContainer}>
        <p className={style.title}>Welcome to Antinote</p>
      </div>
      <section className={style.wrapper}>
        <div className={style.modalContainer}>
          <button
            className={style.modalButton}
            onClick={() => setShowModal(true)}>
            Sign Up
          </button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <SignupForm />
            </Modal>
          )}
        </div>
      </section>
    </div>
  );
};

export default SignupFormModal;
