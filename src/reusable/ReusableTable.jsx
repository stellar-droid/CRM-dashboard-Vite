// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh Wani
// version : 4.0
// maintainer : Lokesh Wani,Aniket Sanap

import React, {
  useState,
  useMemo,
  useCallback,
  useReducer,
  lazy,
  Suspense,
} from "react";
import { Card } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import Switch from "react-bootstrap/Switch";
import { Dropdown } from "react-bootstrap";
// import { sortDirections, paginationOptions } from "../utils/constants";
import { jsPDF } from "jspdf";
import ConfirmationModal from "./ConfirmationModal";
import { Offcanvas } from "react-bootstrap";
const CommonForm = lazy(() => import("./CommonForm"));

const ReusableTable = ({
  tableData,
  setData,
  isDesiganations,
  changeStatus,
  getDesignations,
  setRefreshData,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [rowToUpdate, setRowToUpdate] = useState();
  const [isActive, setIsActive] = useState(null);
  const [showView, setShowView] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [is_Architect_Biddesk, setIs_Architect_Biddesk] = useState(null);
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
    designationName: "asc",
    department: "asc",
    subDepartment: "asc",
    reportingTo: "asc",
    is_architect_biddesk: "asc",
  });

  const handleClick = (headerName) => {
    setSortDirections((prevState) => ({
      ...prevState,
      [headerName]: prevState[headerName] === "asc" ? "desc" : "asc",
    }));
  };
  const handleConfirm = async (row) => {
    console.log("Row TO UPDATE from COnfirm MOdal ", row);
    // if (rowToUpdate !== null) {
    //   const updatedData = tableData.map((item, i) =>
    //     item.id === rowToUpdate ? { ...item, isActive: !item.isActive } : item
    //   );}
    {
      if (isDesiganations && isActive !== null) {
        await changeStatus(row.designationid, !row.is_active);
        setRefreshData(Math.random());
      }
      if (isDesiganations && is_Architect_Biddesk !== null) {
        await changeStatus(row.designationid, null, !row.is_architect_biddesk);
        setRefreshData(Math.random());
      }
    }
    // setData(updatedData);
    setRowToUpdate(null);
    setShowModal(false);
  };
  const handleCancel = (nullFlag) => {
    setRowToUpdate(null);
    setShowModal(false);
    {
      nullFlag === "is_Architect_Biddesk"
        ? setIs_Architect_Biddesk(null)
        : setIsActive(null);
    }
    {
      showDelete && setShowDelete(false);
    }
  };

  const handleToggleChange = (rowId, row, toggleName) => {
    console.log("Toggle Name", toggleName);
    setRowToUpdate(row);
    if (toggleName == "is_active") {
      setIsActive(row.is_active);
    } else {
      setIs_Architect_Biddesk(row.is_architect_biddesk);
    }
    // {toggleName=="is_active"?setIsActive(row.is_active):setIs_Architect_Biddesk(row.is_architect_biddesk)}
    setShowModal(true);
    console.log("Row ID to update", row);
  };

  const handleShowView = () => setShowView(true);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseView = () => {
    showView ? setShowView(false) : setShowEdit(false);
  };
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

  const statusModal = () => {
    console.log("Status Modal");
    return (
      <div>
        <ConfirmationModal
          show={showModal}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          isActiveStatus={isActive}
          is_Architect_Biddesk={is_Architect_Biddesk}
          setisActiveStatus={setIsActive}
          setIs_Architect_Biddesk={setIs_Architect_Biddesk}
          rowToUpdate={rowToUpdate}
        />
      </div>
    );
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

  const paginationOptionsConfig = {
    sizePerPageList: [
      { text: "5", value: 5 },
      { text: "10", value: 10 },
      { text: "15", value: 15 },
      { text: "20", value: 20 },
    ],
    sizePerPage: 5, // Default size per page
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
    doc.text("Pricing Details", 10, 10);

    doc.setFontSize(12);
    doc.text(`S.No: ${rowData.srNo}`, 10, 20);
    doc.text(`Product Name: ${rowData.productName}`, 10, 30);
    doc.text(`Price Level: ${rowData.priceLevel}`, 10, 40);
    doc.text(`Price List: ${rowData.priceList}`, 10, 50);
    doc.text(
      `Purchase Cost (One Time): ${rowData.purchaseCostOneTime}`,
      10,
      60
    );
    doc.text(
      `Purchase Cost (Recurring): ${rowData.purchaseCostRecurring}`,
      10,
      70
    );
    doc.text(
      `Selling Price (One Time): ${rowData.sellingPriceOneTime}`,
      10,
      80
    );
    doc.text(
      `Selling Price (Recurring): ${rowData.sellingPriceRecurring}`,
      10,
      90
    );
    doc.text(`Expiry Date: ${rowData.expiryDate}`, 10, 100);
    doc.text(`Is Approved: ${rowData.isApproved ? "Yes" : "No"}`, 10, 110);
    doc.text(`Is Active: ${rowData.isActive ? "Yes" : "No"}`, 10, 120);

    doc.save("row-data.pdf");
  };
  const designationColumns = useMemo(
    () => [
      {
        dataField: "srNo",
        text: "Sr. No",
        sort: false,
        classes: "sortable-cell", // Add custom class to each cell in this column
        headerClasses: `sortable-header-srNo ${sortDirections.srNo}`, // Add custom class to the header of this column
        // headerFormatter: (column, colIndex) => (
        //   <span onClick={() => handleClick("srNo")}>Sr. No</span>
        // ),
      },
      {
        dataField: "designationname",
        text: "Designation Name",
        sort: false,
        headerClasses: `sortable-header-designationName ${sortDirections.designationName}`,
        // headerFormatter: (column, colIndex) => (
        //   <span onClick={() => handleClick("designationName")}>
        //     Designation Name
        //   </span>
        // ),
      },
      {
        dataField: "department",
        text: "Department",
        sort: false,
        headerClasses: `sortable-header-DOB ${sortDirections.department}`,
        // headerFormatter: (column, colIndex) => (
        //   <span onClick={() => handleClick("department")}>Department</span>
        // ),
      },
      {
        dataField: "subDepartment",
        text: "Sub Department",
        sort: false,
        headerClasses: `sortable-header-subDepartment ${sortDirections.subDepartment}`,
        // headerFormatter: (column, colIndex) => (
        //   <span onClick={() => handleClick("subDepartment")}>
        //     Sub Department
        //   </span>
        // ),
      },
      {
        dataField: "reportingTo",
        text: "Reporting To",
        sort: false,
        headerClasses: `sortable-header-reportingTo ${sortDirections.reportingTo}`,
        // headerFormatter: (column, colIndex) => (
        //   <span onClick={() => handleClick("reportingTo")}>Reporting To</span>
        // ),
      },
      {
        dataField: "is_active",
        text: "Is Active",
        sort: true,
        headerClasses: `sortable-header-isActive ${sortDirections.isActive}`,
        headerFormatter: (column, colIndex) => (
          <span onClick={() => handleClick("isActive")}>Is Active</span>
        ),
        formatter: (cell, row) => (
          <Switch
            size="small"
            checked={row.is_active}
            onChange={() => handleToggleChange(row.id, row, "is_active")}
          />
        ),
      },
      {
        dataField: "is_architect_biddesk",
        text: "Is Architect Biddesk",
        sort: true,
        headerClasses: `sortable-header-is_architect_biddesk ${sortDirections.is_architect_biddesk}`,
        headerFormatter: (column, colIndex) => (
          <span onClick={() => handleClick("is_architect_biddesk")}>
            Is Architect Biddesk
          </span>
        ),
        formatter: (cell, row) => (
          <Switch
            size="small"
            checked={row.is_architect_biddesk}
            onChange={() =>
              handleToggleChange(row.id, row, "is_architect_biddesk")
            }
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
            </Dropdown.Menu>
          </Dropdown>
        ),
        sort: false,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
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
          <span onClick={() => handleClick("primaryPhoneNo")}>
            Primary Phone No.
          </span>
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
          <span onClick={() => handleClick("email")}>Email</span>
        ),
      },
      {
        dataField: "leadCode",
        text: "Lead Code",
        sort: true,
        headerClasses: `sortable-header-leadCode ${sortDirections.leadCode}`,
        headerFormatter: (column, colIndex) => (
          <span onClick={() => handleClick("leadCode")}>Lead Code</span>
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
    ],
    []
  );

  return (
    <>
      <BootstrapTable
        keyField="designationid"
        data={tableData}
        columns={isDesiganations === true ? designationColumns : columns}
        bootstrap4
        pagination={paginationFactory(paginationOptionsConfig)}
        id="table-to-export"
        
      />
      {statusModal()}
      {deleteModal()}

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
          <Suspense fallback={<div>Loading...</div>}>
            <CommonForm viewOnly={showView} />
          </Suspense>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ReusableTable;
