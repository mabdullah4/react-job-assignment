import React, { useState, useEffect } from "react";
import "./modal.css";
import ModalService from "../../service/modal-service";

const ModalComponent = ({ children, isOpen, width, height }) => {
  const [isModalOpen, setModalOpen] = useState(isOpen || false);
  const styles = {
    width,
    height
  };

  const onChange = () => {
    setModalOpen(ModalService._state.isOpen);
  };

  useEffect(() => {
    ModalService.setState(isModalOpen);
    ModalService.onChange = onChange;
  }, []);

  return (
    <div className={`modal ${isModalOpen ? "opened" : ""}`} style={styles}>
      {children}
    </div>
  );
};

export default ModalComponent;
