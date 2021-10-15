import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditTitle from "./EditTitle";

const TitleModal = ({ notebook }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Title</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditTitle id={notebook} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default TitleModal;
