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
          className={`fi ${isExpanded ? "fi-ss-cross-small" : "fi-ss-menu-burger"}`}
        ></i>
      </div>
      <nav
        className="nav flex-column"

      >
        <div className="nav-item">
          <Link className="nav-link" to="/home">
            <i className="bi bi-house-door"></i>{" "}
            <span className="text-left p-0 col-10" data-bs-toggle="tooltip" title="cbvbccbvvcx!">Home</span>
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
          className={`nav-item ${activeMenus[1] === "projects" ? "active" : ""
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
                className={`bi bi-chevron-${activeMenus[1] === "projects" ? "up" : "down"
                  } ml-auto`}
              ></i>
            </span>
          </Link>
          {isExpanded && (
            <div
              className={`submenu ${activeMenus[1] === "projects" ? "show" : ""
                }`}
            >
              <Link className="nav-link" to="/projects/data">
                Data
              </Link>
              <Link className="nav-link" to="/projects/group">
                Group
              </Link>
              <div
                className={`nav-item ${activeMenus[2] === "members" ? "active" : ""
                  }`}
              >
                <Link
                  href="#"
                  className="nav-link"
                  onClick={() => toggleSubMenu("members", 2)}
                >
                  Members
                  <i
                    className={`bi bi-chevron-${activeMenus[2] === "members" ? "up" : "down"
                      } ml-auto`}
                  ></i>
                </Link>
                <div
                  className={`submenu ${activeMenus[2] === "members" ? "show" : ""
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
          className={`nav-item ${activeMenus[1] === "analytics" ? "active" : ""
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
                className={`bi bi-chevron-${activeMenus[1] === "analytics" ? "up" : "down"
                  } ml-auto`}
              ></i>
            </span>
          </Link>
          {(isExpanded) && (
            <div
              className={`submenu ${activeMenus[1] === "analytics" ? "show" : ""
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
          <Link className="nav-link" to={"/settings"} >
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
        <NavDropdown.Item className='crm-delete' href="#action/3.3">
          <i className="bi bi-box-arrow-left"></i> Logout
        </NavDropdown.Item>
      </NavDropdown>

    </div>
  );
};

export default SideNavbar;
