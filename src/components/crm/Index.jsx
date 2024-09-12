// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani,Aniket Sanap

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import BarChart1 from "../../assets/images/BarChart1.svg";
import User from "../../assets/images/User.jpg";
import "bootstrap-icons/font/bootstrap-icons.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideNavbar from "./SideNavbar";
import PricingModel from "./PricingModel";
import Settings from "./Settings";
import { Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import { BarChart } from "react-feather";
import Dropdown from "react-bootstrap/Dropdown";
import BarChart2 from "../../assets/images/BarChart2.svg";

const Index = () => {

  const navigate = useNavigate();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isNavHovered, setIsNavHovered] = useState(false);
  const handleToggleSidebar = (isExpanded) => {
    setIsSidebarExpanded(isExpanded);
  };

const handleLogoClick = () => {
  navigate("/home");
};

  return (
    <>
      {/* =========Main Header and Sidebar=========*/}
      <div className={`header-sidebar-container  ${isSidebarExpanded ? "header-active" : ""}`}>
        {/* SideNavbar START  Here*/}
        <div className="crmLeftMenu">
          <SideNavbar
            onToggleSidebar={handleToggleSidebar}
            setIsNavHovered={setIsNavHovered}
          />
        </div>
        {/* SideNavbar START  Here*/}

        {/* TopbarMenu Here*/}
        <div className="crmTopMenu">
          <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
              <Navbar.Brand className="btn" onClick={handleLogoClick}>
                <img src={BarChart1} alt="Crm-logo" /><span>Sales CRM</span>
              </Navbar.Brand>
              <Form inline>
                <Row className="p-0 m-0 col-12 d-flex justify-content-between flex-nowrap">
                  <Col xl="11">
                    <Form.Control
                      type="text"
                      placeholder="Search anything here..."
                      className=" mr-sm-2"
                    />
                  </Col>
                  <Col className="ps-1">
                    <Button type="submit">
                      <i className="bi bi-search"></i>
                    </Button>
                  </Col>
                </Row>
              </Form>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto notification-icon">

                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <i className="bi bi-bell"></i><span>5</span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <div className="notification-card-header">
                        <h4>Notifications</h4>
                        <ul>
                          <li>
                            <div className="notification-img">
                              <img src={BarChart2} alt="Crm-logo" />
                            </div>
                            <div className="notification-text">
                              <h4>Keefe Bond added new tags to Design</h4>
                              <p>Lorem Ipsum has been the industry's standard dum</p>
                              <small>2 min ago</small>
                            </div>
                          </li>
                          <li>
                            <div className="notification-img">
                              <img src={BarChart2} alt="Crm-logo" />
                            </div>
                            <div className="notification-text">
                              <h4>Keefe Bond added new tags to Design</h4>
                              <p>Lorem Ipsum has been the industry's standard dum</p>
                              <small>2 min ago</small>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>

      {/* =========Main Content Here=========*/}
      <div
        className={`crmContent ${
          isSidebarExpanded ? "content-expanded" : ""
        }`}
      >
       
       



      <Outlet />
        
      </div>
    </>
  );
};

export default Index;