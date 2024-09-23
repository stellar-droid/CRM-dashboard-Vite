import React, { useEffect, useState, useCallback } from "react";
import axios from "../../../../utils/axios";
import { Breadcrumb } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button, Col, Form, Row } from "react-bootstrap";
import ReusableTable from "../../../../reusable/ReusableTable";
import { Offcanvas } from "react-bootstrap";
import CommonForm from "../../../../reusable/CommonForm";
import {
  getDesignations,
  changeStatus,
} from "../../../../services/DesignationService";
import Dropdown from "react-bootstrap/Dropdown";

const Designations = () => {
  const [designationsData, setDesignationsData] = useState([]);
  const [isDesiganations, setisDesiganations] = useState(false);
  const [refreshData, setRefreshData] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    setisDesiganations(true);
  }, []);

  const fetchDesignations = useCallback(async () => {
    const response = await getDesignations(page, limit);
    setTotalPages(response.total_records);

    const updatedData = response.result.map((item, index) => ({
      ...item,
      srNo: (page - 1) * limit + index + 1,
      reportingTo: item.reportingTo ? item.reportingTo : "N.A",
    }));
    setUpdatedData(updatedData);
    setDesignationsData(updatedData);
  }, [page, limit]);

  const filterFunction = (e) => {
    console.log("Filter Function", e.target.value);
    const filteredData = updatedData.filter((designation) =>
      designation.designationname.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setDesignationsData(filteredData);
  };

  useEffect(() => {
    fetchDesignations();
  }, [fetchDesignations, refreshData]);

  const handleShowAdd = () => setShowAdd(true);
  const handleCloseAdd = () => setShowAdd(false);

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
                          onChange={() => {
                            filterFunction(event);
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
                      <Button className="search-btn " type="submit" onClick={(e)=>{e.preventDefault()}}>
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
          <Offcanvas.Title>Add Contact</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <CommonForm />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Designations;
