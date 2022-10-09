import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
import logo from "../../assets/images/white-logo.png";
import LogoutIcon from "../../assets/icons/logout.svg";

library.add(fas);

const SideBar = () => {
  const location = useLocation();

  const [active, setActive] = useState(1);

//   useEffect(() => {
//     menu.forEach((element) => {
//       if (location.pathname === element.path) {
//         setActive(element.id);
//       }
//     });
//   }, [location.pathname]);

  //   const __navigate = (id) => {
  //     setActive(id);
  //   };

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

              {/* <Link to="/admin/AddStudent" className="sidebar-item-active">
                <FontAwesomeIcon icon="fas fa-user-plus" />
                <span className="sidebar-item-label">Add Student</span>
              </Link>
              <Link to="/admin/AddLecturer" className="sidebar-item-active">
                <FontAwesomeIcon icon="fas fa-user-plus" />
                <span className="sidebar-item-label">Add Lecturer</span>
              </Link>
              <Link
                to="/admin/AdminViewStudent"
                className="sidebar-item-active"
              >
                <FontAwesomeIcon icon="fas fa-th-list" />
                <span className="sidebar-item-label">View Student</span>
              </Link>
              <Link
                to="/admin/AdminViewLecturer"
                className="sidebar-item-active"
              >
                <FontAwesomeIcon icon="fas fa-th-list" />
                <span className="sidebar-item-label">View Lecturer</span>
              </Link> */}
              {/* Lecturer  */}

              <Link
                to="/lecturer/LecViewStudent"
                className="sidebar-item-active"
              >
                <FontAwesomeIcon icon="fas fa-th-list" />
                <span className="sidebar-item-label">View Student</span>
              </Link>
              <Link
                to="/lecturer/CreateContent"
                className="sidebar-item-active"
              >
                <FontAwesomeIcon icon="fas fa-pencil-ruler" />
                <span className="sidebar-item-label">Create Content</span>
              </Link>
              <Link
                to="/lecturer/LecUploadAssignment"
                className="sidebar-item-active"
              >
                <FontAwesomeIcon icon="fas fa-file-upload" />
                <span className="sidebar-item-label">Upload Assignment</span>
              </Link>
              <Link
                to="/lecturer/LecViewAssignment"
                className="sidebar-item-active"
              >
                <FontAwesomeIcon icon="fas fa-file-invoice" />
                <span className="sidebar-item-label">View Assignment</span>
              </Link>
              <Link
                to="/lecturer/LecViewModuleList"
                className="sidebar-item-active"
              >
                <FontAwesomeIcon icon="fas fa-stream" />
                <span className="sidebar-item-label">View Modules</span>
              </Link>
              <Link
                to="/lecturer/LecCreateModule"
                className="sidebar-item-active"
              >
                <FontAwesomeIcon icon="fas fa-calendar-plus" />
                <span className="sidebar-item-label">Create Module</span>
              </Link>

              {/* Student  */}
              <Link
                to="/student/StuViewModuleList"
                className="sidebar-item-active"
              >
                <FontAwesomeIcon icon="fas fa-stream" />
                <span className="sidebar-item-label">View Modules</span>
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
