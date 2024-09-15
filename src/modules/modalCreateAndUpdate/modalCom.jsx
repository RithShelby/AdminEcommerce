import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = ({ show, onHide, title, bodyModal }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      className="w-100
    "
    >
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{bodyModal}</Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
