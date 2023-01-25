import React from "react";
import "./Modal.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ closeModal }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.sessionStorage.clear();
    navigate("/");
  };

  return (
    <div className="modalBg" onClick={() => closeModal(false)}>
      <div className="modalCont">
        <div className="title">
          <h3>Logout</h3>
        </div>
        <div className="body">
          <p>Are you sure want to logout?</p>
        </div>
        <div className="footer-btn">
          <button className="btn-cancel" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button className="btn-logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
