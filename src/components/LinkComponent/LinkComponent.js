import React from "react";
import "./link.css";
import ModalService from "../../service/modal-service";

const LinkComponent = ({ text, url, canOpenModal }) => {
  const toggleModal = () => {
    ModalService.toggle();
  };

  return (
    <a
      onClick={canOpenModal && toggleModal}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default LinkComponent;
