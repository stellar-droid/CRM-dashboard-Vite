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
  rowToUpdate,
  is_Architect_Biddesk,
  setIs_Architect_Biddesk,
  setisActiveStatus,
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
          isActiveStatus={isActiveStatus}
        />
      </div>
    );
  };

  useEffect(() => {
    console.log("Check is delete prop", isDelete);
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
              {isActiveStatus !== null
                ? isActiveStatus === true
                  ? "In-active"
                  : "Active"
                : ""}
              {is_Architect_Biddesk !== null
                ? is_Architect_Biddesk === true
                  ? "Non Architect / BidDesk"
                  : "Architect / BidDesk"
                : ""}
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-lg"
            variant="primary"
            onClick={async () => {
              await onConfirm(rowToUpdate);
              setShowafterconfirmationModal(true);
              setisActiveStatus(null);
              setIs_Architect_Biddesk(null);
            }}
          >
            Yes, Set It {isActiveStatus === true ? "In-active" : "Active"}!
          </Button>
          <Button
            className="btn-default btn-lg"
            variant="primary"
            onClick={() => {
              isActiveStatus !== null
                ? onCancel("is_Architect_Biddesk")
                : onCancel("isActiveStatus");
              setisActiveStatus(null);
              setIs_Architect_Biddesk(null);
            }}
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
