import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Success from "../assets/images/Success.svg";

const AfterConfirmationModal = ({ show, setShow, isActiveStatus }) => {
  const hideModal = () => {
    setShow(false);
  };
  

  return (
    <>
      <Modal show={show} onHide={hideModal} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="crm-warning-popup">
          <img className="crm-img-close" src={Success} alt="Crm-logo" />

          {/* <p className="mt-4">Success !</p> */}
          <p className="mt-4">
            Pricing model is set to 
            {!isActiveStatus === true ? "  Active" : "  In-active"} successfully.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-lg" variant="primary" onClick={hideModal}>
            OK
          </Button>
          {/* <Button className='btn-default btn-lg' variant="primary" onClick={onCancel}>
          Cancel
        </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AfterConfirmationModal;
