import { useState, useEffect } from "react";
import * as rb from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import SideBar from '../../components/Sidebar';
import "../styles.css";


const StuViewModuleList = () => {
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
            <h2>View Module List</h2>
          </div>
          <rb.Table className="table table-hover table-bordered" responsive>
            <thead>
              <th>Module ID</th>
              <th>Module Name</th>
              <th>Teacher Name</th>
              <th>Sessions</th>
              <th>Actions</th>
            </thead>

            <tbody>
              <tr className="post-card">
                <>
                  <td>
                    <span>hfhrehrh</span>
                  </td>
                  <td>
                    <span>hrherhdh</span>
                  </td>
                  <td>
                    <span>hdhthth</span>
                  </td>
                  <td>
                    <span>dhftjftj</span>
                  </td>
                  
                  <td>
                    <rb.Button
                      variant="dark"
                      type="submit"
                      className="btn btn-sm"
                    >
                      Enroll
                    </rb.Button>
                  </td>
                </>
              </tr>
            </tbody>
          </rb.Table>
        </div>
      </div></div>
      </div>
    </>
  );
};

export default StuViewModuleList;
