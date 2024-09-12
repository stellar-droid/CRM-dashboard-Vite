// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh Wani
// version : 4.0
// maintainer : Lokesh Wani,Aniket Sanap

import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Info from "../assets/images/Info.svg";
import AfterConfirmationModal from "./AfterConfirmationModal";

const ConfirmationModal = ({
  setIsDelete,
  isDelete,
  show,
  setShow,
  onConfirm,
  onCancel,
  isActiveStatus,
}) => {
  const [showafterconfirmationModal, setShowafterconfirmationModal] =
    React.useState(false);
  const [isActiveStatusAfter, setIsActiveStatusAfter] = React.useState(false);

  useEffect(() => {
    setIsActiveStatusAfter(isActiveStatus);
  }, [isActiveStatus]);

  const afterConfirmationModal = () => {
    console.log("After Confirmation Modal");
    return (
      <div>
        <AfterConfirmationModal
          show={showafterconfirmationModal}
          setShow={setShowafterconfirmationModal}
          isActive={isActiveStatusAfter}
        />
      </div>
    );
  };

  useEffect(() => {
    console.log("Check is delete prop",isDelete)
  }, [isDelete]);
  return (
    <>
      <Modal show={show} onHide={onCancel} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="crm-warning-popup">
          <img className="crm-img-close" src={Info} alt="Crm-logo" />
          {isDelete ? (
            <p className="mt-4">
              Are you sure you want to delete this record ?
            </p>
          ) : (
            <p className="mt-4">
              Are you sure you want to set this record as{" "}
              {isActiveStatus === true ? "In-active" : "Active"} ?
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-lg"
            variant="primary"
            onClick={() => {
              onConfirm();
              setShowafterconfirmationModal(true);
            }}
          >
            Yes, Set It {isActiveStatus === true ? "In-active" : "Active"}!
          </Button>
          <Button
            className="btn-default btn-lg"
            variant="primary"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      {afterConfirmationModal()}
    </>
  );
};

export default ConfirmationModal;
