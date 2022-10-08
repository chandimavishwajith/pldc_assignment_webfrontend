import { useState, useEffect } from "react";
import * as rb from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import SideBar from "../../components/Sidebar";
import sidebar_menu from "../../constants/routes";
import "../styles.css";

const AddMarks = () => {
  const [posts, setPosts] = useState([]);

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
        <SideBar menu={sidebar_menu} />
        <div className="dashboard-body">
          <div className="dashboard-content">
            <DashboardHeader />

            <div className="dashboard-content-container">
              <div className="dashboard-content-header">
                <h2>Add Marks</h2>
                <rb.Button
                  variant="primary"
                  type="submit"
                  className="btn btn-sm"
                >
                  Download Assignment
                </rb.Button>
              </div>
              <div className="d-grid gap-3">
                <rb.Form>
                  <Row className="g-2">
                    <Col md>
                      <rb.Form.Group
                        className="mb-3"
                        controlId="rb.FormBasicEmail"
                      >
                        <rb.Form.Label>Assignment ID</rb.Form.Label>
                        <rb.Form.Control type="text" disabled />
                      </rb.Form.Group>
                    </Col>
                    <Col md>
                      <rb.Form.Group
                        className="mb-3"
                        controlId="rb.FormBasicEmail"
                      >
                        <rb.Form.Label>Assignment Name</rb.Form.Label>
                        <rb.Form.Control type="text" disabled />
                      </rb.Form.Group>
                    </Col>
                  </Row>

                  <Row className="g-2">
                    <Col md>
                      <rb.Form.Group
                        className="mb-3"
                        controlId="rb.FormBasicEmail"
                      >
                        <rb.Form.Label>Student Name</rb.Form.Label>
                        <rb.Form.Control type="text" disabled />
                      </rb.Form.Group>
                    </Col>
                    <Col md>
                      <rb.Form.Group
                        className="mb-3"
                        controlId="rb.FormBasicEmail"
                      >
                        <rb.Form.Label>Marks</rb.Form.Label>
                        <rb.Form.Control type="number" />
                      </rb.Form.Group>
                    </Col>
                  </Row>

                  <rb.Button
                    variant="secondary"
                    type="submit"
                    className="btn btn-lg"
                  >
                    Submit
                  </rb.Button>
                </rb.Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMarks;
