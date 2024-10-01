import React from 'react'

const Departments = () => {
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
  )
}

export default Departments