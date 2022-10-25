import { useState, useEffect } from "react";
import * as rb from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import SideBar from "../../components/Sidebar";
import "../styles.css";

const TeaViewStudent = () => {
  const [posts, setPosts] = useState([]);
  const [attendence, setAttendence] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/file/modules")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="dashboard-container">
        <SideBar  />
        <div className="dashboard-body">
          <div className="dashboard-content">
            <DashboardHeader />

            <div className="dashboard-content-container">
              <div className="dashboard-content-header">
                <h2>View Student</h2>
              </div>
              <rb.Table className="table table-hover table-bordered" responsive>
                <thead>
                  <th>Student ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Date of Birth</th>
                  <th>Address</th>
                  <th>Select Module</th>
                  
                </thead>

                <tbody>
                  <tr className="post-card">
                    <>
                      <td>
                        <span>001</span>
                      </td>
                      <td>
                        <span>Sahan</span>
                      </td>
                      <td>
                        <span>Perera</span>
                      </td>
                      <td>
                        <span>2001.03.06</span>
                      </td>
                      <td>
                        <span>Colombo, Sri Lanka</span>
                      </td>
                      <td>
                        <span>Maths</span>
                      </td>
                    </>
                  </tr>
                </tbody>
              </rb.Table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeaViewStudent;
