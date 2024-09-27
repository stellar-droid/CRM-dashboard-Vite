import React, { useEffect } from "react";
import { useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Row, Col, Button, Form } from "react-bootstrap";
import Select from "react-select";
import Flatpickr from "react-flatpickr";
import { useFormik } from "formik";
import axios from "../../../../../utils/axios";
import { useMemo } from "react";

const AddFormDesignation = ({ viewOnly,setShowAdd }) => {
  const initialValues = useMemo(
    () => ({
      department: [],
      designationName: "",
      hasSubDepartment: "",
      subDepartment: [],
      buisnessCategory: [],
      isReported: "",
      isReporting: "",
      reportingTo: [],
      discountingOnLineItems: "",
      discountingOnTotal: "",
      oneTimePrice1: "",
      oneTimePrice2: "",
      recuringPrice1: "",
      recuringPrice2: "",
    }),
    []
  );

  const validationSchema = Yup.object({
    designationName: Yup.string().required("Designation Name is required"),
    department: Yup.mixed()
      .nullable()
      .required("Department is required")
      .test(
        "is-valid-department",
        "Department is required",
        (value) => value && value.length != 0 // For multi-select or non-null value check
      ),
    // hasSubDepartment: Yup.string().required("Has Sub Department is required"),
    // subDepartment: Yup.mixed()
    //   .nullable()
    //   .required("Department is required")
    //   .test(
    //     "is-valid-subDepartment",
    //     "Has Sub Department is required",
    //     (value) => value && value.length != 0 // For multi-select or non-null value check
    //   ),
    // buisnessCategory: Yup.mixed()
    //   .nullable()
    //   .required("Buisness Category is required")
    //   .test(
    //     "is-valid-buisnessCategory",
    //     "Buisness Category is required",
    //     (value) => value && value.length != 0 // For multi-select or non-null value check
    //   ),
    // isReported: Yup.string().required("Is Reported is required"),
    // isReporting: Yup.string().required("Is Reporting is required"),
    // reportingTo: Yup.mixed()
    //   .nullable()
    //   .required("Reporting To is required")
    //   .test(
    //     "is-valid-reportingTo",
    //     "Reporting To is required",
    //     (value) => value && value.length != 0 // For multi-select or non-null value check
    //   ),
    // discountingOnLineItems: Yup.string().required(
    //   "Discounting On LineItems is required"
    // ),
    // oneTimePrice1: Yup.string().required("One Time Price 1 is required"),
    // oneTimePrice2: Yup.string().required("One Time Price 2 is required"),
    // recuringPrice1: Yup.string().required("Recuring Price 1 is required"),
    // recuringPrice2: Yup.string().required("Recuring Price 2 is required"),
    // discountingOnTotal: Yup.string().required(
    //   "Discounting On Total is required"
    // ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      console.log("HELLO",values)
      const createObject = {
        designationname: values.designationName,
        department: values.department.value,
        permissionids: "lokesh",
        usertypeid  : 0,
        is_sub_department: false,
        sub_department_id : null,
        isreporting : false,
        isreported : false,
        reportingdesignationid: null,
        is_active:true,
      }
      setSubmitting(true);
      try {
        console.log("Form Data", values);
        // Handle form submission logic here
        const response = await axios.post("/designations", createObject); // Use values directly instead of formData
        if (response.status === 200) {
          console.log("Data submitted successfully");
          setShowAdd(false);
        }
      } catch (error) {
        console.error("Error submitting data", error);
      }
      setSubmitting(false); // Set submitting to false when the submission is complete
    },
  });

  useEffect(() => {
    console.log("formik values", formik.values);
    console.log("formik errors", formik.errors);
  },[formik])
  const handleReset = () => {
    formik.resetForm();
  };

  const departmentOptions = [
    { value: "accounts", label: "Accounts" },
    { value: "admin", label: "Admin" },
    { value: "audit", label: "Audit" },
    { value: "cmd", label: "CMD" },
    { value: "commercialCommittee", label: "Commercial Committee" },
    { value: "dba", label: "DBA" },
    { value: "domesticBilling", label: "Domestic Billing" },
    { value: "ec", label: "EC" },
    { value: "hr", label: "HR" },
    { value: "internationalSales", label: "International Sales" },
    { value: "marketing", label: "Marketing" },
    { value: "newUser", label: "New User" },
    { value: "noc", label: "NOC" },
    { value: "overseas", label: "Overseas" },
    { value: "procurement", label: "Procurement" },
    { value: "researchDevelopment", label: "Research & Development" },
    { value: "sales", label: "Sales" },
    { value: "salesOperations", label: "Sales Operations" },
    { value: "serviceDelivery", label: "Service Delivery" },
    { value: "soc", label: "SOC" },
    { value: "solutions", label: "Solutions" },
    { value: "userAdmin", label: "UserAdmin" },
    { value: "spochub", label: "Spochub" },
    { value: "store", label: "Store" },
  ];

  const subDepartmentOptions = [
    { value: "bfsi", label: "BFSI" },
    { value: "developmentEnterprise", label: "Development Enterprise" },
    { value: "developmentGovernment", label: "Development Government" },
    { value: "enterprise", label: "Enterprise" },
    { value: "government", label: "Government" },
    { value: "research", label: "Research" },
    { value: "saasSpochub", label: "SaaS Spochub" },
  ];

  const buisnessCategoryOptions = [
    // Inside Sales,International Sales, Sales,Spochub
    { value: "insideSales", label: "Inside Sales" },
    { value: "internationalSales", label: "International Sales" },
    { value: "sales", label: "Sales" },
    { value: "spochub", label: "Spochub" },
  ];

  return (
    <>
      <Form noValidate onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Col xl="6">
            <Form.Group className="md-2" controlId="formGroupCompany">
              <Form.Label>
                Department <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Select
                options={departmentOptions}
                isDisabled={viewOnly}
                name="department"
                placeholder="Select Department"
                value={formik.values.department}
                onChange={(selectedOption) =>
                  formik.setFieldValue("department", selectedOption)
                } // For handling multiple options
                onBlur={() => formik.setFieldTouched("department", true)}
              />
              {formik.touched.department && formik.errors.department && (
                <Form.Text className="text-danger">
                  {formik.errors.department}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col xl="6">
            <Form.Group className="md-2" controlId="formGroupName">
              <Form.Label>
                Designation Name <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="designationName"
                placeholder="Enter Designation Name"
                value={formik.values.designationName}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.designationName &&
                  !!formik.errors.designationName
                } // Shows red border if invalid
              />
              {formik.touched.designationName &&
                formik.errors.designationName && (
                  <Form.Text className="text-danger">
                    {formik.errors.designationName}
                  </Form.Text>
                )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupCompany">
              <Form.Label>
                Has Sub Department <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Select
                aria-label="Has Sub Department"
                disabled={viewOnly}
                name="hasSubDepartment"
                value={formik.values.hasSubDepartment}
                onChange={formik.handleChange}
                onBlur={() => formik.setFieldTouched("hasSubDepartment", true)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
              {formik.touched.hasSubDepartment &&
                formik.errors.hasSubDepartment && (
                  <Form.Text className="text-danger">
                    {formik.errors.hasSubDepartment}
                  </Form.Text>
                )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupCompany">
              <Form.Label>
                Sub Department <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Select
                options={subDepartmentOptions}
                aria-label="Sub Department"
                disabled={viewOnly}
                name="subDepartment"
                value={formik.values.subDepartment}
                onChange={(selectedOption) =>
                  formik.setFieldValue("subDepartment", selectedOption)
                }
                onBlur={() => formik.setFieldTouched("subDepartment", true)}
              />
              {formik.touched.subDepartment && formik.errors.subDepartment && (
                <Form.Text className="text-danger">
                  {formik.errors.subDepartment}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupCompany">
              <Form.Label>
                Buisness Category <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Select
                options={buisnessCategoryOptions}
                isDisabled={viewOnly}
                name="buisnessCategory"
                placeholder="Select Buisness Category"
                value={formik.values.buisnessCategory}
                onChange={(selectedOption) =>
                  formik.setFieldValue("buisnessCategory", selectedOption)
                } // For handling multiple options
                onBlur={() => formik.setFieldTouched("buisnessCategory", true)}
              />
              {formik.touched.buisnessCategory &&
                formik.errors.buisnessCategory && (
                  <Form.Text className="text-danger">
                    {formik.errors.buisnessCategory}
                  </Form.Text>
                )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupCompany">
              <Form.Label>
                Is Reported <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Select 
              aria-label="Is Reported" 
              disabled={viewOnly}
              name="isReported"
              value={formik.values.isReported}
              onChange={formik.handleChange}
              onBlur={() => formik.setFieldTouched("isReported", true)}

              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
              {formik.touched.hasSubDepartment &&
                formik.errors.hasSubDepartment && (
                  <Form.Text className="text-danger">
                    {formik.errors.hasSubDepartment}
                  </Form.Text>
                )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupCompany">
              <Form.Label>
                Is Reporting <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Select aria-label="Is Reporting" disabled={viewOnly}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupCompany">
              <Form.Label>
                Reporting To <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Select
                options={departmentOptions}
                isDisabled={viewOnly}
                name="reportingTo"
                placeholder="Select Reporting To"
                value={formik.values.reportingTo}
                onChange={(selectedOption) =>
                  formik.setFieldValue("reportingTo", selectedOption)
                } // For handling multiple options
                onBlur={() => formik.setFieldTouched("reportingTo", true)}
              />
              {formik.touched.reportingTo && formik.errors.reportingTo && (
                <Form.Text className="text-danger">
                  {formik.errors.reportingTo}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupCompany">
              <Form.Label>
                Discounting On LineItems <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Select
                aria-label="Discounting On LineItems"
                disabled={viewOnly}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupName">
              <Form.Label>
                One Time Price 1<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="oneTimePrice1"
                placeholder="One Time Price 1"
                value={formik.values.oneTimePrice1}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.oneTimePrice1 && !!formik.errors.oneTimePrice1
                } // Shows red border if invalid
              />
              {formik.touched.oneTimePrice1 && formik.errors.oneTimePrice1 && (
                <Form.Text className="text-danger">
                  {formik.errors.oneTimePrice1}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupName">
              <Form.Label>
                One Time Price 2<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="oneTimePrice2"
                placeholder="One Time Price 2"
                value={formik.values.oneTimePrice2}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.oneTimePrice2 && !!formik.errors.oneTimePrice2
                } // Shows red border if invalid
              />
              {formik.touched.oneTimePrice2 && formik.errors.oneTimePrice2 && (
                <Form.Text className="text-danger">
                  {formik.errors.oneTimePrice2}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupName">
              <Form.Label>
                Recuring Price 1<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="recuringPrice1"
                placeholder="Recuring Price 1"
                value={formik.values.recuringPrice1}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.recuringPrice1 &&
                  !!formik.errors.recuringPrice1
                } // Shows red border if invalid
              />
              {formik.touched.recuringPrice1 &&
                formik.errors.recuringPrice1 && (
                  <Form.Text className="text-danger">
                    {formik.errors.recuringPrice1}
                  </Form.Text>
                )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupName">
              <Form.Label>
                Recuring Price 2<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="recuringPrice2"
                placeholder="Recuring Price 2"
                value={formik.values.recuringPrice2}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.recuringPrice2 &&
                  !!formik.errors.recuringPrice2
                } // Shows red border if invalid
              />
              {formik.touched.recuringPrice2 &&
                formik.errors.recuringPrice2 && (
                  <Form.Text className="text-danger">
                    {formik.errors.recuringPrice2}
                  </Form.Text>
                )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupCompany">
              <Form.Label>
                Discounting On Total <span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Select
                aria-label="Discounting On Total"
                disabled={viewOnly}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupName">
              <Form.Label>
                One Time Price 1<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="oneTimePrice1"
                placeholder="One Time Price 1"
                value={formik.values.oneTimePrice1}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.oneTimePrice1 && !!formik.errors.oneTimePrice1
                } // Shows red border if invalid
              />
              {formik.touched.oneTimePrice1 && formik.errors.oneTimePrice1 && (
                <Form.Text className="text-danger">
                  {formik.errors.oneTimePrice1}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupName">
              <Form.Label>
                One Time Price 2<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="oneTimePrice2"
                placeholder="One Time Price 2"
                value={formik.values.oneTimePrice2}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.oneTimePrice2 && !!formik.errors.oneTimePrice2
                } // Shows red border if invalid
              />
              {formik.touched.oneTimePrice2 && formik.errors.oneTimePrice2 && (
                <Form.Text className="text-danger">
                  {formik.errors.oneTimePrice2}
                </Form.Text>
              )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupName">
              <Form.Label>
                Recuring Price 1<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="recuringPrice1"
                placeholder="Recuring Price 1"
                value={formik.values.recuringPrice1}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.recuringPrice1 &&
                  !!formik.errors.recuringPrice1
                } // Shows red border if invalid
              />
              {formik.touched.recuringPrice1 &&
                formik.errors.recuringPrice1 && (
                  <Form.Text className="text-danger">
                    {formik.errors.recuringPrice1}
                  </Form.Text>
                )}
            </Form.Group>
          </Col>
          <Col xl="4">
            <Form.Group className="md-2" controlId="formGroupName">
              <Form.Label>
                Recuring Price 2<span style={{ color: "red" }}>*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="recuringPrice2"
                placeholder="Recuring Price 2"
                value={formik.values.recuringPrice2}
                onChange={formik.handleChange}
                isInvalid={
                  formik.touched.recuringPrice2 &&
                  !!formik.errors.recuringPrice2
                } // Shows red border if invalid
              />
              {formik.touched.recuringPrice2 &&
                formik.errors.recuringPrice2 && (
                  <Form.Text className="text-danger">
                    {formik.errors.recuringPrice2}
                  </Form.Text>
                )}
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit" disabled={formik.isSubmitting}>
          Submit
        </Button>
        <Button variant="primary" onClick={handleReset} className="ms-2">
          Reset
        </Button>
      </Form>
    </>
  );
};

export default AddFormDesignation;
