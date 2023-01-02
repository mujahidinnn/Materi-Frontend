import React, { useState } from "react";
import Modal from "./Modal";
import iconLogout from "../assets/logout.svg";

const ModalLogout = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <img
        src={iconLogout}
        alt=""
        title="logout"
        className="icon-logout"
        onClick={() => setOpenModal(true)}
      />

      {openModal && <Modal closeModal={setOpenModal} />}
    </div>
  );
};

export default ModalLogout;
