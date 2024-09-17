// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh Wani
// version : 4.0
// maintainer : Lokesh Wani,Aniket Sanap

import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "../../css/Crm.css";
import { Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import CommonForm from "../../reusable/CommonForm";
import Dropdown from "react-bootstrap/Dropdown";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Switch from "react-bootstrap/Switch";
import ConfirmationModal from "../../reusable/ConfirmationModal";
import { set } from "date-fns";
import TableSkeleton from '../../reusable/TableSkeleton';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
const PricingModel = ({isLoading}) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [rowIdToUpdate, setRowIdToUpdate] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [sortDirections, setSortDirections] = useState({
    srNo: "asc",
    productName: "asc",
    priceLevel: "asc",
    priceList: "asc",
    purchaseCostOneTime: "asc",
    purchaseCostRecurring: "asc",
    sellingPriceOneTime: "asc",
    sellingPriceRecurring: "asc",
    expiryDate: "asc",
    isApproved: "asc",
    isActive: "asc",
  });
  

  const handleClick = (headerName) => {
    setSortDirections((prevState) => ({
      ...prevState,
      [headerName]: prevState[headerName] === "asc" ? "desc" : "asc",
    }));
  };

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleCloseView = () => {
    showView ? setShowView(false) : setShowEdit(false);
  };
  const handleShowView = () => setShowView(true);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const handleToggleChange = (rowId, row) => {
    setRowIdToUpdate(rowId);
    setShowModal(true);
    setIsActive(row.isActive);
  };

  const handleConfirm = () => {
    if (rowIdToUpdate !== null) {
      const updatedData = data.map((item, i) =>
        item.id === rowIdToUpdate ? { ...item, isActive: !item.isActive } : item
      );
      setData(updatedData);
      setRowIdToUpdate(null);
      setShowModal(false);
    }
  };

  const handleCancel = () => {
    setRowIdToUpdate(null);
    setShowModal(false);
    {showDelete&&setShowDelete(false)}
  };
  const handleView = (id) => {
    // Handle view action
    handleShowView();
  };

  const handleEdit = (id) => {
    // Handle edit action
    handleShowEdit();
  };

  const statusModal = () => {
    console.log("Status Modal");
    return (
      <div>
        <ConfirmationModal
          show={showModal}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          isActiveStatus={isActive}
        />
      </div>
    );
  };

  const handleDelete = (id) => {
    // Handle delete action
    console.log("Delete item with id", id);
    setShowDelete(true);
    setIsDelete(true);
  };
  const deleteModal = () => {
    console.log("Delete Modal");
    return (
      <div>
        <ConfirmationModal
          show={showDelete}
          setIsDelete={setIsDelete}
          isDelete={isDelete}
          onCancel={handleCancel}

        />
      </div>
    );
  };

  const initialData = [
    {
      srNo: 1,
      id: 1,
      productName: "API Pack A - Basic",
      priceLevel: "Monthly",
      priceList: "Enterprise Price List",
      purchaseCostOneTime: "1500 ",
      purchaseCostRecurring: "50 ",
      sellingPriceOneTime: "2000 ",
      sellingPriceRecurring: "75 ",
      expiryDate: "31/03/2025",
      isApproved: "Yes",
      isActive: false,
    },
    {
      srNo: 2,
      id: 2,
      productName: "API Pack B - Standard",
      priceLevel: "Quarterly",
      priceList: "Standard Price List",
      purchaseCostOneTime: "3000 ",
      purchaseCostRecurring: "120 ",
      sellingPriceOneTime: "4000 ",
      sellingPriceRecurring: "150 ",
      expiryDate: "30/06/2025",
      isApproved: "No",
      isActive: true,
    },
    {
      srNo: 3,
      id: 3,
      productName: "API Pack C - Premium",
      priceLevel: "Yearly",
      priceList: "Custom Price List",
      purchaseCostOneTime: "5000 ",
      purchaseCostRecurring: "200 ",
      sellingPriceOneTime: "6500 ",
      sellingPriceRecurring: "250 ",
      expiryDate: "31/12/2025",
      isApproved: "Yes",
      isActive: true,
    },
    {
      srNo: 4,
      id: 4,
      productName: "API Pack D - Elite",
      priceLevel: "Monthly",
      priceList: "Enterprise Price List",
      purchaseCostOneTime: "10000 ",
      purchaseCostRecurring: "500 ",
      sellingPriceOneTime: "12000 ",
      sellingPriceRecurring: "750 ",
      expiryDate: "31/03/2025",
      isApproved: "Yes",
      isActive: true,
    },
    {
      srNo: 5,
      id: 5,
      productName: "API Pack E - Ultimate",
      priceLevel: "Yearly",
      priceList: "Custom Price List",
      purchaseCostOneTime: "20000 ",
      purchaseCostRecurring: "1000 ",
      sellingPriceOneTime: "25000 ",
      sellingPriceRecurring: "1500 ",
      expiryDate: "31/12/2025",
      isApproved: "No",
      isActive: false,
    },
    {
      srNo: 6,
      id: 6,
      productName: "API Pack F - Premium",
      priceLevel: "Monthly",
      priceList: "Enterprise Price List",
      purchaseCostOneTime: "5000 ",
      purchaseCostRecurring: "200 ",
      sellingPriceOneTime: "6500 ",
      sellingPriceRecurring: "250 ",
      expiryDate: "31/03/2025",
      isApproved: "Yes",
      isActive: true,
    },
    {
      srNo: 7,
      id: 7,
      productName: "API Pack G - Elite",
      priceLevel: "Yearly",
      priceList: "Custom Price List",
      purchaseCostOneTime: "10000 ",
      purchaseCostRecurring: "500 ",
      sellingPriceOneTime: "12000 ",
      sellingPriceRecurring: "750 ",
      expiryDate: "31/12/2025",
      isApproved: "Yes",
      isActive: true,
    },
    {
      srNo: 8,
      id: 8,
      productName: "API Pack H - Ultimate",
      priceLevel: "Monthly",
      priceList: "Enterprise Price List",
      purchaseCostOneTime: "20000 ",
      purchaseCostRecurring: "1000 ",
      sellingPriceOneTime: "25000 ",
      sellingPriceRecurring: "1500 ",
      expiryDate: "31/03/2025",
      isApproved: "No",
      isActive: false,
    }
    // ... other objects with varied data
  ];
  const [data, setData] = useState(initialData);

  const columns = [
    {
      dataField: "srNo",
      text: "Sr. No",
      sort: true,
      classes: "sortable-cell", // Add custom class to each cell in this column
      headerClasses: `sortable-header-srNo ${sortDirections.srNo}`, // Add custom class to the header of this column
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("srNo")}>Sr. No</span>
      ),
    },
    {
      dataField: "productName",
      text: "Product Name",
      sort: true,
      headerClasses: `sortable-header-productName ${sortDirections.productName}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("productName")}>Product Name</span>
      ),
    },
    {
      dataField: "priceLevel",
      text: "Price Level",
      sort: true,
      headerClasses: `sortable-header-priceLevel ${sortDirections.priceLevel}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("priceLevel")}>Price Level</span>
      ),
    },
    {
      dataField: "priceList",
      text: "Price List",
      sort: true,
      headerClasses: `sortable-header-priceList ${sortDirections.priceList}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("priceList")}>Price List</span>
      ),
    },
    {
      dataField: "purchaseCostOneTime",
      text: "Purchase Cost (One Time)",
      sort: true,
      headerClasses: `sortable-header-purchaseCostOneTime ${sortDirections.purchaseCostOneTime}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("purchaseCostOneTime")}>
          Purchase Cost
          <small>One Time</small>
        </span>
      ),
    },
    {
      dataField: "purchaseCostRecurring",
      text: "Purchase Cost (Recurring)",
      sort: true,
      headerClasses: `sortable-header-purchaseCostRecurring ${sortDirections.purchaseCostRecurring}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("purchaseCostRecurring")}>
          Purchase Cost
          <small>Recurring</small>
        </span>
      ),
    },
    {
      dataField: "sellingPriceOneTime",
      text: "Selling Price (One Time)",
      sort: true,
      headerClasses: `sortable-header-sellingPriceOneTime ${sortDirections.sellingPriceOneTime}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("sellingPriceOneTime")}>
          Selling Price
          <small>One Time</small>
        </span>
      ),
    },
    {
      dataField: "sellingPriceRecurring",
      text: "Selling Price (Recurring)",
      sort: true,
      headerClasses: `sortable-header-sellingPriceRecurring ${sortDirections.sellingPriceRecurring}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("sellingPriceRecurring")}>
          Selling Price
          <small>Recurring</small>
        </span>
      ),
    },
    {
      dataField: "expiryDate",
      text: "Expiry Date",
      sort: true,
      headerClasses: `sortable-header-expiryDate ${sortDirections.expiryDate}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("expiryDate")}>Expiry Date</span>
      ),
    },
    {
      dataField: "isApproved",
      text: "Is Approved",
      sort: true,
      headerClasses: `sortable-header-isApproved ${sortDirections.isApproved}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("isApproved")}>Is Approved</span>
      ),
    },
    {
      dataField: "isActive",
      text: "Is Active",
      sort: true,
      headerClasses: `sortable-header-isActive ${sortDirections.isActive}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("isActive")}>Is Active</span>
      ),
      formatter: (cell, row) => (
        <Switch
          size="small"
          checked={row.isActive}
          onChange={() => handleToggleChange(row.id, row)}
        />
      ),
    },
    {
      dataField: "action",
      text: "Action",
      formatter: (cellContent, row) => (
        <Dropdown>
          <Dropdown.Toggle className="crm-dot-btn">
            <i className="bi bi-three-dots-vertical"></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => handleView(row.id)}>
              <i className="bi bi-eye"></i> View
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleEdit(row.id)}>
              <i className="bi bi-pen"></i> Edit
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleExportPDF(row)}>
                <i className="bi bi-file-earmark-pdf "></i>Export
            </Dropdown.Item>
            <Dropdown.Item className="crm-delete dropdown-item" onClick={() => handleDelete(row.id)}>
              <i className="bi bi-trash"></i> Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
      sort: false,
    },
  ];

  const paginationOptions = {
    sizePerPageList: [
      { text: "5", value: 5 },
      { text: "10", value: 10 },
      { text: "15", value: 15 },
      { text: "20", value: 20 },
    ],
    sizePerPage: 10, // Default size per page
    paginationSize: 5, // Number of page buttons to show
    pageStartIndex: 1, // Page index starts from 1
    firstPageText: "First",
    prePageText: "Prev",
    nextPageText: "Next",
    lastPageText: "Last",
    showTotal: true, // Show total records
    alwaysShowAllBtns: true, // Always show all buttons
  };


  const handleExportPDF = (rowData) => {
    const doc = new jsPDF();
  
    doc.setFontSize(18);
    doc.text('Pricing Details', 10, 10);
  
    doc.setFontSize(12);
    doc.text(`S.No: ${rowData.srNo}`, 10, 20);
    doc.text(`Product Name: ${rowData.productName}`, 10, 30);
    doc.text(`Price Level: ${rowData.priceLevel}`, 10, 40);
    doc.text(`Price List: ${rowData.priceList}`, 10, 50);
    doc.text(`Purchase Cost (One Time): ${rowData.purchaseCostOneTime}`, 10, 60);
    doc.text(`Purchase Cost (Recurring): ${rowData.purchaseCostRecurring}`, 10, 70);
    doc.text(`Selling Price (One Time): ${rowData.sellingPriceOneTime}`, 10, 80);
    doc.text(`Selling Price (Recurring): ${rowData.sellingPriceRecurring}`, 10, 90);
    doc.text(`Expiry Date: ${rowData.expiryDate}`, 10, 100);
    doc.text(`Is Approved: ${rowData.isApproved ? 'Yes' : 'No'}`, 10, 110);
    doc.text(`Is Active: ${rowData.isActive ? 'Yes' : 'No'}`, 10, 120);
  
    doc.save('row-data.pdf');
  };

  const handleExportPDF1 = () => {
    const input = document.getElementById("table-to-export");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, heightLeft, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save("table-data.pdf");
    });
  };
  // const [error, setError] = useState(null);
  // useEffect(() => {
  //   const fetchData =  () => {
  //     throw new Error('This is a deliberate error.');
  //   };

  //   fetchData();
  // }, []);
  
  return (
    <>
      <div className="crm-header">
        <h2>Pricing Master List</h2>
        <Breadcrumb>
          <Breadcrumb.Item href="#">
            <i className="bi bi-house-door"></i> Dashboard
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Pricing List</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <Card className="crm-listing">
        <Card.Header>
          <div className="crm-filter-form">
            <Row>
              <Col xs="8">
                <Form>
                  <Row>
                    <Col xs="4" className=" pe-1">
                      <Form.Group
                        className="form-group"
                        controlId="formGroupEmail"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Enter Product name"
                        />
                      </Form.Group>
                    </Col>
                    <Col xs="4" className="ps-1 pe-1">
                      <Form.Group
                        className="form-group"
                        controlId="formGroupEmail"
                      >
                        <Form.Select aria-label="Default select example">
                          <option>Select Price List</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col xs="2" className="ps-1 pe-1">
                      <Button type="submit">
                        <i className="bi bi-search"></i>
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
              <Col xs="4" className="d-flex justify-content-end">
                <Button onClick={handleShowAdd}>
                  Add<i className="bi bi-plus-lg ms-2"></i>
                </Button>
                <Button onClick={handleExportPDF1} className="ms-2">
                  Export to PDF<i className="bi bi-file-earmark-pdf ms-2"></i>
                </Button>
              </Col>
            </Row>
          </div>
        </Card.Header>

        {/* Pricing Master Main Table Start */}
        {isLoading ? (
        <TableSkeleton /> // Show skeleton while loading
      ) : (
        <Card.Body >
          <BootstrapTable
            keyField="id"
            data={data}
            columns={columns}
            bootstrap4
            pagination={paginationFactory(paginationOptions)}
            id="table-to-export"
          />
        </Card.Body>
      )}
        {/* Pricing Master Main Table END */}
      </Card>
      

      {/* ADD Form  */}
      <Offcanvas
        className="crm-right-form"
        show={showAdd}
        onHide={handleCloseAdd}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Pricing Master</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <CommonForm />
        </Offcanvas.Body>
      </Offcanvas>

      {/* VIEW FORM */}
      <Offcanvas
        className="crm-right-form"
        show={showView || showEdit}
        onHide={handleCloseView}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          {showView ? (
            <Offcanvas.Title>View Pricing Master</Offcanvas.Title>
          ) : showEdit ? (
            <Offcanvas.Title>Edit Pricing Master</Offcanvas.Title>
          ) : (
            ""
          )}
        </Offcanvas.Header>

        <Offcanvas.Body>
          <CommonForm viewOnly={showView} />
        </Offcanvas.Body>
      </Offcanvas>

      {statusModal()}
      {deleteModal()}
    </>
  );
};

export default PricingModel;
