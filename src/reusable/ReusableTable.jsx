import React from "react";
import { Card } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { useState } from "react";
import Switch from "react-bootstrap/Switch";
import { Dropdown } from "react-bootstrap";
// import { sortDirections, paginationOptions } from "../utils/constants";
import { jsPDF } from "jspdf";

const ReusableTable = ({tableData}) => {
  const [showModal, setShowModal] = useState(false);
  const [rowIdToUpdate, setRowIdToUpdate] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
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

 
  const handleToggleChange = (rowId, row) => {
    setRowIdToUpdate(rowId);
    setShowModal(true);
    setIsActive(row.isActive);
  };
  const handleClick = (headerName) => {
    setSortDirections((prevState) => ({
      ...prevState,
      [headerName]: prevState[headerName] === "asc" ? "desc" : "asc",
    }));
  };

  const handleShowView = () => setShowView(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const handleView = (id) => {
    // Handle view action
    handleShowView();
  };

  const handleEdit = (id) => {
    // Handle edit action
    handleShowEdit();
  };

  const handleDelete = (id) => {
    // Handle delete action
    console.log("Delete item with id", id);
    setShowDelete(true);
    setIsDelete(true);
  };

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
      dataField: "contactName",
      text: "Contact Name",
      sort: true,
      headerClasses: `sortable-header-contactName ${sortDirections.contactName}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("contactName")}>Contact Name</span>
      ),
    },
    {
      dataField: "dob",
      text: "DOB",
      sort: true,
      headerClasses: `sortable-header-DOB ${sortDirections.dob}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("dob")}>DOB</span>
      ),
    },
    {
      dataField: "primaryPhoneNo",
      text: "Primary Phone No.",
      sort: true,
      headerClasses: `sortable-header-primaryPhoneNo ${sortDirections.primaryPhoneNo}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("primaryPhoneNo")}>Primary Phone No.</span>
      ),
    },
    {
      dataField: "secondaryPhoneNo",
      text: "Secondary Phone No.",
      sort: true,
      headerClasses: `sortable-header-secondaryPhoneNo ${sortDirections.secondaryPhoneNo}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("secondaryPhoneNo")}>
         Secondary Phone No.
        </span>
      ),
    },
    {
      dataField: "AlternatePhoneNo",
      text: "Alternate Phone No.",
      sort: true,
      headerClasses: `sortable-header-AlternatePhoneNo ${sortDirections.AlternatePhoneNo}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("AlternatePhoneNo")}>
          Alternate Phone No.
        </span>
      ),
    },
    {
      dataField: "email",
      text: "Email",
      sort: true,
      headerClasses: `sortable-header-email ${sortDirections.email}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("email")}>
         Email
        </span>
      ),
    },
    {
      dataField: "leadCode",
      text: "Lead Code",
      sort: true,
      headerClasses: `sortable-header-leadCode ${sortDirections.leadCode}`,
      headerFormatter: (column, colIndex) => (
        <span onClick={() => handleClick("leadCode")}>
          Lead Code
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
    // {
    //   dataField: "isActive",
    //   text: "Is Active",
    //   sort: true,
    //   headerClasses: `sortable-header-isActive ${sortDirections.isActive}`,
    //   headerFormatter: (column, colIndex) => (
    //     <span onClick={() => handleClick("isActive")}>Is Active</span>
    //   ),
    //   formatter: (cell, row) => (
    //     <Switch
    //       size="small"
    //       checked={row.isActive}
    //       onChange={() => handleToggleChange(row.id, row)}
    //     />
    //   ),
    // },
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
            <Dropdown.Item
              className="crm-delete dropdown-item"
              onClick={() => handleDelete(row.id)}
            >
              <i className="bi bi-trash"></i> Delete
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
      sort: false,
    },
  ];
  return (
    <>
      <Card>
        <Card.Body>
          <BootstrapTable
            keyField="id"
            data={tableData}
            columns={columns}
            bootstrap4
            pagination={paginationFactory(paginationOptions)}
            id="table-to-export"
          />
        </Card.Body>
      </Card>
    </>
  );
};

export default ReusableTable;
