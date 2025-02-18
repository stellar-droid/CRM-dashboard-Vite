import React, { useEffect, useState, useCallback } from "react";
import axios from "../../../../../utils/axios";
import { Breadcrumb } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button, Col, Form, Row } from "react-bootstrap";
import ReusableTable from "../../../../../reusable/ReusableTable";
import { Offcanvas } from "react-bootstrap";
import CommonForm from "../../../../../reusable/CommonForm";
import {
  getDesignations,
  changeStatus,
  getDesignationsByNames,
} from "../../../../../services/DesignationService";
import Dropdown from "react-bootstrap/Dropdown";
import AddFormDesignation from "./AddFormDesignation";
import { toast } from "react-toastify";

const Designations = () => {
  const [designationsData, setDesignationsData] = useState([]);
  const [isDesiganations, setisDesiganations] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    setisDesiganations(true);
    // return () => {
    //   setisDesiganations(false); // or any other cleanup logic
    // };
  }, []);

  const fetchDesignations = useCallback(async () => {
    const response = await getDesignations(page, limit);
    console.log("DEsignations GET REQUEST ", response);
    setTotalPages(response.total_records);

    const updatedData = response.result.map((item, index) => ({
      ...item,
      srNo: (page - 1) * limit + index + 1,
      reportingTo: item.reportingTo ? item.reportingTo : "N.A",
    }));

    setDesignationsData(updatedData);
    setOriginalData(updatedData);
  }, [page, limit]);

  // const filterFunction = (e) => {
  //   const query = e.target.value.toLowerCase();
  //   setSearchQuery(query);

  //   if (query === "") {
  //     setDesignationsData(originalData);
  //   } else {
  //     const filteredData = originalData.filter((designation) =>
  //       designation.designationname.toLowerCase().includes(query)
  //     );
  //     setDesignationsData(filteredData);
  //   }
  // };

  const handleChangeFilterQuery = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  const handleSearch = async () => {


    if (searchQuery === "") {
      setDesignationsData(originalData);
    }
    else {
    try {
      const response = await getDesignationsByNames(searchQuery);
      console.log("Search Response", response);
      if (response.status == 200) {
        const responseData = [response.data.Data];
        console.log("responseData",responseData)
        setDesignationsData(responseData);
        toast.success("Designation Found");
      }
    } catch (error) {
      console.error(error);
      toast.error("Designation Not Found");
    }
  }
  };

  useEffect(() => {
    fetchDesignations();
  }, [fetchDesignations, refreshData]);

  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => setShowAdd(false);

  const designationAddFormProps = {
    department: "Department",
    designationName: "Designation Name",
    hasSubDepartment: "Has Sub Department",
    subDepartment: " Sub Department",
    buisnessCategory: "Buisness Category",
    isReported: "Is Reported",
    isReporting: "Is Reporting",
    reportingTo: "Reporting To",
    discountingOnLineItems: {
      oneTimePrice1: "One Time Price 1",
      oneTimePrice2: "One Time Price 2",
      recuringPrice1: "Recuring Price 1",
      recuringPrice2: "Recuring Price 2",
    },
    discountingOnTotal: {
      oneTimePrice1: "One Time Price 1",
      oneTimePrice2: "One Time Price 2",
      recuringPrice1: "Recuring Price 1",
      recuringPrice2: "Recuring Price 2",
    },
  };
  return (
    <>
      <div className="crm-header">
        <h2>Designation List</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            <i className="bi bi-house-door"></i> Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Designation List</Breadcrumb.Item>
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
                        <Form.Control
                          type="text"
                          placeholder="Name"
                          onChange={(event) => {
                            // filterFunction(event);
                            handleChangeFilterQuery(event);
                          }}
                        />
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
                      <Button
                        className="search-btn "
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          handleSearch();
                        }}
                      >
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
          <ReusableTable
            tableData={designationsData}
            setData={setDesignationsData}
            isDesiganations={isDesiganations}
            changeStatus={changeStatus}
            getDesignations={getDesignations}
            setRefreshData={setRefreshData}
            totalPages={totalPages}
            setPage={setPage}
            limit={limit}
            setLimit={setLimit}
            page={page}
          />
        </Card.Body>
      </Card>

      <Offcanvas
        className="crm-right-form"
        show={showAdd}
        onHide={handleCloseAdd}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Designation</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <AddFormDesignation setShowAdd={setShowAdd} />
          {/* <CommonForm isDesiganations={isDesiganations} designationAddFormProps={designationAddFormProps}/> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Designations;
