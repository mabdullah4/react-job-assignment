import React from "react";
import "./button.css";

import ModalService from "./../../service/modal-service";

const ButtonComponent = ({ text, canOpenModal }) => {
  const toggleModal = () => {
    ModalService.toggle();
  };
  return <button onClick={canOpenModal && toggleModal}>{text}</button>;
};

export default ButtonComponent;
