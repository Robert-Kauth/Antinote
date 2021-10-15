import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import Create from "./Create";

const CreateModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create Notebook</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <Create setShowModal={setShowModal}></Create>
        </Modal>
      )}
    </>
  );
};

export default CreateModal;
