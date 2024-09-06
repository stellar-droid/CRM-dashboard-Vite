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
                <Nav className="ms-auto">
                  <NavDropdown
                    title={
                      <>
                        <img src={User} alt="Crm-logo" />{" "}
                        <h2>
                          Aniket Sanap<span>Administrator </span>
                        </h2>{" "}
                        <i className="bi bi-chevron-down"></i>
                      </>
                    }
                  >
                    <NavDropdown.Item href="#action/3.1">
                      <i className="bi bi-person"></i> View Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      <i className="bi bi-key"></i> Change Password
                    </NavDropdown.Item>
                    <NavDropdown.Item className='crm-delete' href="#action/3.3">
                      <i className="bi bi-box-arrow-left"></i> Logout
                    </NavDropdown.Item>
                  </NavDropdown>
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