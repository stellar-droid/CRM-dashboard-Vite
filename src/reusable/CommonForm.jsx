// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh Wani
// version : 4.0
// maintainer : Lokesh Wani,Aniket Sanap

import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import { Checkbox } from "primereact/checkbox";

const CommonForm = ({ viewOnly, contactAddFormProps }) => {
  const [checked, setChecked] = useState({
    isChecked: false,
    value: "",
  });
  const [checked1, setChecked1] = useState({
    isChecked: false,
    value: "",
  });
  const [checked2, setChecked2] = useState({
    isChecked: false,
    value: "",
  });
  const [selectedItem, setSelectedItem] = useState(null);
  const [filteredItems, setFilteredItems] = useState([]);

  const companyOptions = [
    { value: "1", label: "Company One" },
    { value: "2", label: "Company Two" },
    { value: "3", label: "Company Three" },
  ];

  const pricingOptions = [
    { value: "1", label: "Pricing Option 1" },
    { value: "2", label: "Pricing Option 2" },
    { value: "3", label: "Pricing Option 3" },
  ];

  const setSolicit = (e, value) => {
    setChecked((prevState) => ({
      ...prevState,
      isChecked: e.target.checked,
      value: value,
    }));
    console.log(
      "The following checkBox is changed",
      checked.value,
      checked.isChecked
    );
  };

  const setEmail = (e,value) => {
    setChecked1((prevState) => ({
      ...prevState,
      isChecked: e.target.checked,
      value: value,
    }));
    console.log(
      "The following checkBox is changed",
      checked1.value,
      checked1.isChecked
    );
  };

  const setCall = (e,value) => {
    setChecked2((prevState) => ({
      ...prevState,
      isChecked: e.target.checked,
      value: value,
    }));
    console.log(
      "The following checkBox is changed",
      checked2.value,
      checked2.isChecked
    );
  };

  return (
    <>
      <Form>
        <Row>
          <Col xl="12">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>
                {contactAddFormProps ? contactAddFormProps.title : "Add pricing Master"}
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                disabled={viewOnly}
              >
                <option>Select Product</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          {contactAddFormProps && (
            <>
              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>
                    {contactAddFormProps ? contactAddFormProps.fisrtName : ""}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    disabled={viewOnly}
                  />
                </Form.Group>
              </Col>

              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>
                    {contactAddFormProps ? contactAddFormProps.middleName : ""}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Middle Name"
                    disabled={viewOnly}
                  />
                </Form.Group>
              </Col>
              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>
                    {contactAddFormProps ? contactAddFormProps.lastName : ""}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="last Name"
                    disabled={viewOnly}
                  />
                </Form.Group>
              </Col>

              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>
                    {contactAddFormProps ? contactAddFormProps.dob : ""}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="DOB"
                    disabled={viewOnly}
                  />
                </Form.Group>
              </Col>
              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>
                    {contactAddFormProps ? contactAddFormProps.companyName : ""}
                  </Form.Label>
                  <Form.Select aria-label="Company Name" disabled={viewOnly}>
                    {contactAddFormProps?.companyName ? (
                      <>
                        <option>Select Option</option>
                        <option value="1">Company One</option>
                        <option value="2">Company Two</option>
                        <option value="3">Company Three</option>
                      </>
                    ) : (
                      <>
                        <option>Select Option</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </>
                    )}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>Designation Name</Form.Label>
                  <Select options={companyOptions} isDisabled={viewOnly} />
                </Form.Group>
              </Col>
              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>{contactAddFormProps?.email ? "Email" : ""}</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    disabled={viewOnly}
                  />
                </Form.Group>
              </Col>
              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>{contactAddFormProps?.faxNo ? "Fax No" : ""}</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="text"
                    disabled={viewOnly}
                  />
                </Form.Group>
              </Col>
              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>
                    {contactAddFormProps?.primaryPhoneNo ? "Primary Phone No." : ""}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="text"
                    disabled={viewOnly}
                  />
                </Form.Group>
              </Col>
              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>
                    {contactAddFormProps?.secondaryPhoneNo
                      ? "Secondary Phone No."
                      : ""}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="text"
                    disabled={viewOnly}
                  />
                </Form.Group>
              </Col>
              <Col xl="6">
                <Form.Group
                  className="form-group mb-2"
                  controlId="formGroupText"
                >
                  <Form.Label>
                    {contactAddFormProps?.alternatePhoneNo
                      ? "Alternate Phone No."
                      : ""}
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="text"
                    disabled={viewOnly}
                  />
                </Form.Group>
              </Col>

              {contactAddFormProps.checkBox && (
                <>
                  <Col xl="2">
                    <Form.Check
                      type="checkbox"
                      label={
                        contactAddFormProps?.checkBoxSolicit ? "Don't Solicit" : ""
                      }
                      disabled={viewOnly}
                      checked={checked.isChecked}
                      onChange={(e) => {
                        setSolicit(e, "solicit");
                      }}
                    />
                  </Col>
                  <Col xl="2">
                    <Form.Check
                      type="checkbox"
                      label={contactAddFormProps?.checkBoxEmail ? "Don't Email" : ""}
                      disabled={viewOnly}
                      checked={checked1.isChecked}
                      onChange={(e) => {
                        setEmail(e, "email");
                      }}
                    />
                  </Col>
                  <Col xl="2">
                    <Form.Check
                      type="checkbox"
                      label={contactAddFormProps?.checkBoxCall ? "Don't Call" : ""}
                      disabled={viewOnly}
                      checked={checked2.isChecked}
                      onChange={(e) => {
                        setCall(e, "call");
                      }}
                    />
                  </Col>
                </>
              )}
            </>
          )}
          {!contactAddFormProps&&
            <>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Pricing List</Form.Label>
              <Select isMulti options={pricingOptions} isDisabled={viewOnly} />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Purchase Cost</Form.Label>
              <Form.Control
                type="text"
                placeholder="Purchase Cost (One Time)"
                disabled={viewOnly}
              />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Purchase Currency</Form.Label>
              <Form.Select
                aria-label="Default select example"
                disabled={viewOnly}
              >
                <option>Purchase Currency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Purchase Cost</Form.Label>
              <Form.Control
                type="text"
                placeholder="Purchase Cost (Recurring)"
                disabled={viewOnly}
              />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Recurring Currency</Form.Label>
              <Form.Select
                aria-label="Default select example"
                disabled={viewOnly}
              >
                <option>Recurring Currency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Selling Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Selling Price (One Time)"
                disabled={viewOnly}
              />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Selling Currency</Form.Label>
              <Form.Select
                aria-label="Default select example"
                disabled={viewOnly}
              >
                <option>Selling Currency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Selling Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Selling Price (Recurring)"
                disabled={viewOnly}
              />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Recurring Selling Currency</Form.Label>
              <Form.Select
                aria-label="Default select example"
                disabled={viewOnly}
              >
                <option>Selling Currency</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Expiry Date</Form.Label>
              <Flatpickr
                className="form-control"
                placeholder="Expiry Date"
                options={{ dateFormat: "Y-m-d" }}
                disabled={viewOnly}
              />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Default Upgrade Forecasted One Time Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="One Time Price"
                disabled={viewOnly}
              />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Forecasted Recurring Price</Form.Label>
              <Form.Control
                type="text"
                placeholder="Forecasted Recurring Price"
                disabled={viewOnly}
              />
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="form-group mb-2" controlId="formGroupText">
              <Form.Label>Forecasted Tenure Months</Form.Label>
              <Form.Control
                type="text"
                placeholder="Forecasted Tenure Months"
                disabled={viewOnly}
              />
            </Form.Group>
          </Col>
          </>
}
        </Row>
        <Row>
          <Col xl="12" className="CrmFormFooter">
            <Button type="submit" disabled={viewOnly}>
              Submit
            </Button>
            <Button
              type="reset"
              className="btn btn-default"
              disabled={viewOnly}
            >
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CommonForm;
