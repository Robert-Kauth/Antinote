import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import { useSelector } from "react-redux";
import SignupForm from "./SignupForm";
import style from "./SignupForm.module.css";

const SignupFormModal = () => {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <div className={style.wrapper}>
      <div className={style.titleContainer}>
        <p className={style.title}>Welcome to Antinote</p>
      </div>
      <div className={style.modalContainer}>
        {!sessionUser && (
          <button
            className={style.modalButton}
            onClick={() => setShowModal(true)}>
            Sign Up
          </button>
        )}
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <SignupForm />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default SignupFormModal;
