// copyright : ESDS Software Solution Ltd. All Rights Reserved
// author : Lokesh
// version : 4.0
// maintainer : Lokesh Wani

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import User from "../../assets/images/User.jpg";
import "../../css/Crm.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SideNavbar = ({ onToggleSidebar, setIsNavHovered }) => {
  const navigate = useNavigate();

  const [isExpanded, setIsExpanded] = useState(false);
  const [activeMenus, setActiveMenus] = useState({});

  const toggleSidebar = () => {
    const newIsExpanded = !isExpanded;
    setIsExpanded(newIsExpanded);
    onToggleSidebar(newIsExpanded);
  };

  const toggleSubMenu = (menuKey, level = 1) => {
    setActiveMenus((prevState) => ({
      ...prevState,
      [level]: prevState[level] === menuKey ? null : menuKey,
    }));
  };

  return (
    <div className={`side-navbar ${isExpanded ? "expanded" : ""}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <i
          className={`fi ${
            isExpanded ? "fi-ss-cross-small" : "fi-ss-menu-burger"
          }`}
        ></i>
      </div>
      <nav className="nav flex-column">
        <div className="nav-item">
          <Link className="nav-link" to="/home">
            <i className="bi bi-house-door"></i>{" "}
            <span
              className="text-left p-0 col-10"
              data-bs-toggle="tooltip"
              title="cbvbccbvvcx!"
            >
              Home
            </span>
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/pricingmodel">
            <i className="bi bi-card-list"></i>{" "}
            <span className="text-left p-0 col-10">Pricing Master</span>
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/contacts">
            <i className="bi bi-person-lines-fill"></i>
            <span className="text-left p-0 col-10">Contacts</span>
          </Link>
        </div>

        <div className="nav-item">
          <Link className="nav-link" to="/companies">
            <i className="bi bi-buildings"></i>
            <span className="text-left p-0 col-10">Companies</span>
          </Link>
        </div>

        <div className="nav-item">
          <Link className="nav-link" to="/leads">
            <i className="bi bi-caret-down"></i>
            <span className="text-left p-0 col-10">Leads</span>
          </Link>
        </div>

        <div
          className={`nav-item ${activeMenus[1] === "masters" ? "active" : ""}`}
        >
          <Link
            href="#"
            className="nav-link"
            onClick={() => toggleSubMenu("masters", 1)}
          >
            <i className="bi bi-folder"></i>
            <span className="text-left p-0 col-10">
              Masters
              <i
                className={`bi bi-chevron-${
                  activeMenus[1] === "masters" ? "up" : "down"
                } ml-auto`}
              ></i>
            </span>
          </Link>
          {isExpanded && (
            <div
              className={`submenu ${
                activeMenus[1] === "masters" ? "show" : ""
              }`}
            >
              {/* <Link className="nav-link" to="/projects/data">
                Data
              </Link>
              <Link className="nav-link" to="/projects/group">
                Group
              </Link> */}
              <div
                className={`nav-item ${
                  activeMenus[2] === "oppurtunityManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("oppurtunityManagement", 2)}
                >
                  Oppurtunity Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[2] === "oppurtunityManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[2] === "oppurtunityManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Oppurtunity Status
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Oppurtunity Stages
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Oppurtunity Task
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Oppurtunity Processes
                  </Link>
                </div>
              </div>
              {/* 2nd Submenu  */}
              <div
                className={`nav-item ${
                  activeMenus[3] === "partnerManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("partnerManagement", 3)}
                >
                  Partner Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[3] === "partnerManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[3] === "partnerManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Partners
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Partners Type
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Bid Type
                  </Link>
                </div>
              </div>

              {/*   3rd Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[4] === "leadManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("leadManagement", 4)}
                >
                  Lead Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[4] === "leadManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[4] === "leadManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Lead Types
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Lead Status
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Lead Sources
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Lead Sub Types
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Lead Buisness Types
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Submission Types
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Qualification
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Tender Sub Types
                  </Link>
                </div>
              </div>

              {/*   4rd Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[5] === "general" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("general", 5)}
                >
                  General
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[5] === "general" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[5] === "general" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Unit of measuere
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    States
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Countries
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Currency
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Campaign
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Address Types
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    City
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Unit Conversion
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Agreement Master
                  </Link>
                </div>
              </div>

              {/*   5th Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[6] === "regionManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("regionManagement", 6)}
                >
                  Region Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[6] === "regionManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[6] === "regionManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Region Master
                  </Link>
                </div>
              </div>

              {/*   6th Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[7] === "productManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("productManagement", 7)}
                >
                  Product Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[7] === "productManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[7] === "productManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Product Type
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    Products
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    Core Products
                  </Link>
                </div>
              </div>

              {/*   7th Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[8] === "userManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("userManagement", 8)}
                >
                  User Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[8] === "userManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[8] === "userManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/designation">
                    Designations
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    Departments
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    Menus
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    Users
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    Sub Departments
                  </Link>
                </div>
              </div>

              {/*   8th Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[9] === "documentManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("documentManagement", 9)}
                >
                  Document Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[9] === "documentManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[9] === "documentManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Document Type
                  </Link>
                </div>
              </div>

              {/*   9th Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[10] === "accountManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("accountManagement", 10)}
                >
                  Account Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[10] === "accountManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[10] === "accountManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Industry Segment
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    Accounts
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    Sub Account Category
                  </Link>
                </div>
              </div>

              {/*   10th Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[11] === "bdEmdManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("bdEmdManagement", 11)}
                >
                  BD & EMD Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[11] === "bdEmdManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[11] === "bdEmdManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Bg status
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    Emd Status
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    BG
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    EMD
                  </Link>
                </div>
              </div>

              {/*   11th Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[12] === "eventManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("eventManagement", 12)}
                >
                  Event Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[12] === "eventManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[12] === "eventManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Events  Types
                  </Link>
                </div>
              </div>


               {/*   12th Submenu*/}
               <div
                className={`nav-item ${
                  activeMenus[13] === "clausesManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("clausesManagement", 13)}
                >
                  Clauses Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[13] === "clausesManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[13] === "clausesManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Clauses  Types
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                    Clauses  
                  </Link>
                </div>
              </div>


              {/*   13th Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[14] === "contactManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("contactManagement", 14)}
                >
                  Contact Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[14] === "contactManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[14] === "contactManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                   Contact Designation
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                  Contact Title  
                  </Link>
                </div>
              </div>


              {/*   14th Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[15] === "priceBookManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("priceBookManagement", 15)}
                >
                  Price Book Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[15] === "priceBookManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[15] === "priceBookManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                  Price Level
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                  Price List  
                  </Link>
                </div>
              </div>


               {/*   15th Submenu*/}
               <div
                className={`nav-item ${
                  activeMenus[16] === "reports" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("reports", 16)}
                >
                  Reports
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[16] === "reports" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[16] === "reports" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                  Maximun Lead Reports
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                  Lead Transfer
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                  Power BI Reports
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                  Owner Transfer
                  </Link>
                </div>
              </div>


              {/*   16th Submenu*/}
              <div
                className={`nav-item ${
                  activeMenus[17] === "categoryManagement" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("categoryManagement", 17)}
                >
                  Category Management
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[17] === "categoryManagement" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[17] === "categoryManagement" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                  Primary Category
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                  Secondary Category
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                  Teritory Category
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                  Fourth Category
                  </Link>
                  <Link className="nav-link" to="/projects/members/team">
                  Fifth   Category
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <div
          className={`nav-item ${
            activeMenus[1] === "projects" ? "active" : ""
          }`}
        >
          <Link
            href="#"
            className="nav-link"
            onClick={() => toggleSubMenu("projects", 1)}
          >
            <i className="bi bi-folder"></i>
            <span className="text-left p-0 col-10">
              Projects
              <i
                className={`bi bi-chevron-${
                  activeMenus[1] === "projects" ? "up" : "down"
                } ml-auto`}
              ></i>
            </span>
          </Link>
          {isExpanded && (
            <div
              className={`submenu ${
                activeMenus[1] === "projects" ? "show" : ""
              }`}
            >
              <Link className="nav-link" to="/projects/data">
                Data
              </Link>
              <Link className="nav-link" to="/projects/group">
                Group
              </Link>
              <div
                className={`nav-item ${
                  activeMenus[2] === "members" ? "active" : ""
                }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("members", 2)}
                >
                  Members
                  <i
                    className={`bi bi-chevron-${
                      activeMenus[2] === "members" ? "up" : "down"
                    } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${
                    activeMenus[2] === "members" ? "show" : ""
                  }`}
                >
                  <Link className="nav-link" to="/projects/members/team">
                    Team
                  </Link>
                  <Link className="nav-link" to="/projects/members/clients">
                    Clients
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <div
          className={`nav-item ${
            activeMenus[1] === "analytics" ? "active" : ""
          }`}
        >
          <Link
            href="#"
            className="nav-link"
            onClick={() => toggleSubMenu("analytics", 1)}
          >
            <i className="bi bi-pie-chart"></i>
            <span className="text-left p-0 col-10">
              Analytics
              <i
                className={`bi bi-chevron-${
                  activeMenus[1] === "analytics" ? "up" : "down"
                } ml-auto`}
              ></i>
            </span>
          </Link>
          {isExpanded && (
            <div
              className={`submenu ${
                activeMenus[1] === "analytics" ? "show" : ""
              }`}
            >
              <Link href="#" className="nav-link">
                Overview
              </Link>
              <Link href="#" className="nav-link">
                Reports
              </Link>
            </div>
          )}
        </div>

        <div className="nav-item">
          <Link className="nav-link" to={"/settings"}>
            <i className="bi bi-gear"></i>{" "}
            <span className="text-left p-0 col-10">Settings</span>
          </Link>
        </div>
      </nav>

      <NavDropdown
        title={
          <>
            <div>
              <img src={User} alt="Crm-logo" />{" "}
              <h2>
                Aniket Sanap<span>Administrator </span>
              </h2>{" "}
            </div>
            <i className="bi bi-grid"></i>
          </>
        }
      >
        <NavDropdown.Item href="#action/3.1">
          <i className="bi bi-person"></i> View Profile
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          <i className="bi bi-gear"></i> Setting
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          <i className="bi bi-key"></i> Change Password
        </NavDropdown.Item>
        <NavDropdown.Item className="crm-delete" href="#action/3.3">
          <i className="bi bi-box-arrow-left"></i> Logout
        </NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

export default SideNavbar;
