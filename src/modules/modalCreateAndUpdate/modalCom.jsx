import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = ({ show, handleClose, title, bodyModal }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
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
