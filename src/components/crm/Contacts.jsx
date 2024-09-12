// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh Wani
// version : 4.0
// maintainer : Lokesh Wani,Aniket Sanap

import React, { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import ReusableTable from "../../reusable/ReusableTable";
import { Button, Col, Form, Row } from "react-bootstrap";
import html2canvas from "html2canvas";
import ConfirmationModal from "../../reusable/ConfirmationModal";
import { Offcanvas } from "react-bootstrap";
import CommonForm from "../../reusable/CommonForm";

const Contacts = () => {
  const initialData = [
    {
      srNo: 1,
      contactName: "John Doe",
      dob: "01/01/1980",
      primaryPhoneNo: "1234567890",
      secondaryPhoneNo: "0987654321",
      AlternatePhoneNo: "1122334455",
      email: "john.doe@example.com",
      leadCode: "LEAD001",
      expiryDate: "31/12/2024",
      isActive: true,
    },
    {
      srNo: 2,
      contactName: "Jane Smith",
      dob: "15/05/1985",
      primaryPhoneNo: "2233445566",
      secondaryPhoneNo: "6677889900",
      AlternatePhoneNo: "9988776655",
      email: "jane.smith@example.com",
      leadCode: "LEAD002",
      expiryDate: "30/06/2025",
      isActive: false,
    },
    {
      srNo: 3,
      contactName: "Emily Davis",
      dob: "20/11/1990",
      primaryPhoneNo: "3344556677",
      secondaryPhoneNo: "7788990011",
      AlternatePhoneNo: "5566778899",
      email: "emily.davis@example.com",
      leadCode: "LEAD003",
      expiryDate: "31/03/2025",
      isActive: true,
    },
    {
      srNo: 4,
      contactName: "Michael Brown",
      dob: "08/03/1975",
      primaryPhoneNo: "4455667788",
      secondaryPhoneNo: "1122334455",
      AlternatePhoneNo: "2233445566",
      email: "michael.brown@example.com",
      leadCode: "LEAD004",
      expiryDate: "31/12/2025",
      isActive: false,
    },
    {
      srNo: 5,
      contactName: "Sarah Wilson",
      dob: "12/12/1995",
      primaryPhoneNo: "5566778899",
      secondaryPhoneNo: "3344556677",
      AlternatePhoneNo: "4455667788",
      email: "sarah.wilson@example.com",
      leadCode: "LEAD005",
      expiryDate: "30/09/2024",
      isActive: true,
    },
    {
      srNo: 6,
      contactName: "David Lee",
      dob: "25/07/1988",
      primaryPhoneNo: "6677889900",
      secondaryPhoneNo: "4455667788",
      AlternatePhoneNo: "5566778899",
      email: "david.lee@example.com",
      leadCode: "LEAD006",
      expiryDate: "31/05/2025",
      isActive: false,
    },
    {
      srNo: 7,
      contactName: "Emma Clark",
      dob: "30/09/1993",
      primaryPhoneNo: "7788990011",
      secondaryPhoneNo: "2233445566",
      AlternatePhoneNo: "3344556677",
      email: "emma.clark@example.com",
      leadCode: "LEAD007",
      expiryDate: "31/08/2025",
      isActive: true,
    },
    {
      srNo: 8,
      contactName: "Oliver Harris",
      dob: "18/02/1982",
      primaryPhoneNo: "8899001122",
      secondaryPhoneNo: "5566778899",
      AlternatePhoneNo: "6677889900",
      email: "oliver.harris@example.com",
      leadCode: "LEAD008",
      expiryDate: "30/11/2025",
      isActive: true,
    },
  ];
  const [data, setData] = useState(initialData);
  const [showAdd, setShowAdd] = useState(false);

  
  const contactAddFormProps={
    title:"Title",
    fisrtName:"First Name",
    middleName:"Middle Name",
    lastName:"Last Name",
    dob:"Date of Birth",
    companyName:"Company Name",
    desiganation:"Designation Name",
    email:"Email",
    faxNo:"Fax No",
    primaryPhoneNo:"Primary Phone No",
    secondaryPhoneNo:"Secondary Phone No",
    alternatePhoneNo:"Alternate Phone No",
    checkBox:true,
    checkBoxSolicit:"Don't Solicit",
    checkBoxEmail:"Don't Email",
    checkBoxCall:"Don't Call",
    checkBoxFax:"Don't Fax",
    checkBoxSms:"Don't SMS",
  };
  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => setShowAdd(false);

 

  
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
          <div className="crm-filter-form">
            <Row>
              <Col xs="8">
                <Form>
                  <Row>
                    <Col xs="3" className=" pe-1">
                      <Form.Group
                        className="form-group"
                        controlId="formGroupEmail"
                      >
                        <Form.Control type="text" placeholder="Name" />
                      </Form.Group>
                    </Col>
                    <Col xs="3" className=" pe-1">
                      <Form.Group
                        className="form-group"
                        controlId="formGroupEmail"
                      >
                        <Form.Control type="text" placeholder="Email" />
                      </Form.Group>
                    </Col>
                    <Col xs="3" className=" pe-1">
                      <Form.Group
                        className="form-group"
                        controlId="formGroupEmail"
                      >
                        <Form.Control type="text" placeholder="Lead Code" />
                      </Form.Group>
                    </Col>
                    <Col xs="3" className="ps-1 pe-1">
                      <Button className="search-btn " type="submit">
                        Search <i className="bi bi-search"></i>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col xs="4" className="d-flex justify-content-end">
                <Button onClick={handleShowAdd}>
                  Add<i className="bi bi-plus-lg ms-2"></i>
                </Button>
              </Col>
            </Row>
          </div>
        </Card.Header>

        <Card.Body>
          <ReusableTable tableData={data} setData={setData}/>
        </Card.Body>
      </Card>


      <Offcanvas
        className="crm-right-form"
        show={showAdd}
        onHide={handleCloseAdd}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Contact</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <CommonForm contactAddFormProps={contactAddFormProps} />
        </Offcanvas.Body>
      </Offcanvas>
     
    </>
  );
};

export default Contacts;
