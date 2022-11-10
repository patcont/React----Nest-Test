import React, { useState } from "react";
import "./App.css";
import User_info from "./User_info";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      {isOpen && (
        <>
          <div className="overlay"></div>
          <div className="modal">
            <header className="modal__header">
              <h2>Modal Users</h2>
              <button onClick={closeModal} className="close-button">
                &times;
              </button>
            </header>
            <main className="modal__main">
              <User_info></User_info>
            </main>
          </div>
        </>
      )}

      <button className="button" onClick={openModal}>
        Open Modal
      </button>
    </div>
  );
}

export default Modal;
