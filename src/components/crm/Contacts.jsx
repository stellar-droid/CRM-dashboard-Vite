import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";

const Contacts = () => {
  return (
    <>
          <div className="crm-header">
        <h2>Contacts</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            <i className="bi bi-house-door"></i> Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Contacts</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card>
      <Card.Header>
          Form
        </Card.Header>
      <Card.Body>
     
      </Card.Body>
      </Card>
    </>
  );
};

export default Contacts;
