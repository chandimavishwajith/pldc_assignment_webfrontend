import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import logo from "../../assets/images/white-logo.png";
import LogoutIcon from "../../assets/icons/logout.svg";

library.add(fas);

const SideBar = () => {
  const location = useLocation();
  const { pathname } = location;
  //   const [active, setActive] = useState(1);
  const splitLocationAdmin = pathname.split("admin/");
  const splitLocationStudent = pathname.split("student/");
  const splitLocationLecturer = pathname.split("lecturer/");

  return (
    <nav className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <img src={logo} alt="logo" />
        </div>

        <div className="sidebar-container">
          <div className="sidebar-items">
            {/* {menu.map((item, index) => ( */}
            <div key="1">
              {/* Admin  */}
              {/* <Link
                to="/admin/AddStudent"
                className={
                  splitLocationAdmin[1] === "AddStudent"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-user-plus" />
                <span className="sidebar-item-label">Add Student</span>
              </Link>
              <Link
                to="/admin/AddLecturer"
                className={
                  splitLocationAdmin[1] === "AddLecturer"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-user-plus" />
                <span className="sidebar-item-label">Add Lecturer</span>
              </Link>
              <Link
                to="/admin/AdminViewStudent"
                className={
                  splitLocationAdmin[1] === "AdminViewStudent"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-th-list" />
                <span className="sidebar-item-label">View Students</span>
              </Link>
              <Link
                to="/admin/AdminViewLecturer"
                className={
                  splitLocationAdmin[1] === "AdminViewLecturer"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-th-list" />
                <span className="sidebar-item-label">View Lecturers</span>
              </Link>
              <Link
                to="/admin/AdminViewModule"
                className={
                  splitLocationAdmin[1] === "AdminViewModule"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-stream" />
                <span className="sidebar-item-label">View Modules</span>
              </Link>
              <Link
                to="/admin/AdminViewContent"
                className={
                  splitLocationAdmin[1] === "AdminViewContent"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-th-list" />
                <span className="sidebar-item-label">
                  Contents, Assignments
                </span>
              </Link> */}
              {/* Lecturer  */}

              {/* <Link
                to="/lecturer/LecViewStudent"
                className={
                  splitLocationLecturer[1] === "LecViewStudent"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-th-list" />
                <span className="sidebar-item-label">View Students</span>
              </Link>
              <Link
                to="/lecturer/CreateContent"
                className={
                  splitLocationLecturer[1] === "CreateContent"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-pencil-ruler" />
                <span className="sidebar-item-label">Create Content</span>
              </Link>
              <Link
                to="/lecturer/LecUploadAssignment"
                className={
                  splitLocationLecturer[1] === "LecUploadAssignment"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-file-upload" />
                <span className="sidebar-item-label">Upload Assignment</span>
              </Link>
              <Link
                to="/lecturer/LecViewAssignment"
                className={
                  splitLocationLecturer[1] === "LecViewAssignment"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-file-invoice" />
                <span className="sidebar-item-label">View Assignments</span>
              </Link>
              <Link
                to="/lecturer/LecViewModuleList"
                className={
                  splitLocationLecturer[1] === "LecViewModuleList"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-stream" />
                <span className="sidebar-item-label">View Modules</span>
              </Link>
              <Link
                to="/lecturer/LecCreateModule"
                className={
                  splitLocationLecturer[1] === "LecCreateModule"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }>
                <FontAwesomeIcon icon="fas fa-calendar-plus" />
                <span className="sidebar-item-label">Create Module</span>
              </Link> */}

              {/* Student  */}
              <Link
                to="/student/StuViewModuleList"
                className={
                  splitLocationStudent[1] === "StuViewModuleList"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }
              >
                <FontAwesomeIcon icon="fas fa-stream" />
                <span className="sidebar-item-label">View Modules</span>
              </Link>
              <Link
                to="/student/StuViewContent"
                className={
                  splitLocationStudent[1] === "StuViewContent"
                    ? "sidebar-item-active"
                    : "sidebar-item"
                }
              >
                <FontAwesomeIcon icon="fas fa-th-list" />
                <span className="sidebar-item-label">
                  Contents and Assignments
                </span>
              </Link>
            </div>
            {/* ))} */}
          </div>
          <div className="sidebar-footer">
            <span className="sidebar-item-label">Logout</span>
            <img
              src={LogoutIcon}
              alt="icon-logout"
              className="sidebar-item-icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SideBar;
