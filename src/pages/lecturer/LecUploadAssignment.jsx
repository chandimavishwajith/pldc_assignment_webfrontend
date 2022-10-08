import { useState, useEffect } from "react";
import * as rb from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import SideBar from '../../components/Sidebar';
import sidebar_menu from '../../constants/routes';
import "../styles.css";

const LecUploadAssignment = () => {
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
            <h2>Upload Assignment</h2>
          </div>
          <div className="d-grid gap-3">
            <rb.Form>
              <Row className="g-2">
                <Col md>
                  <rb.Form.Group className="mb-3" controlId="rb.FormBasicEmail">
                    <rb.Form.Label>Assignment Name</rb.Form.Label>
                    <rb.Form.Control type="email" />
                  </rb.Form.Group>
                </Col>
                <Col md>
                  <rb.Form.Group className="mb-3" controlId="rb.FormBasicEmail">
                    <rb.Form.Label>Description</rb.Form.Label>
                    <rb.Form.Control
                      as="textarea"
                      style={{ height: "100px" }}
                    />
                  </rb.Form.Group>
                </Col>
              </Row>
              
                <Row className="g-2">
                <Col md>
                  <rb.Form.Group className="mb-3" controlId="rb.FormBasicEmail">
                    <rb.Form.Label>Deadline</rb.Form.Label>
                    <rb.Form.Control type="datetime" />
                  </rb.Form.Group>
                </Col>
                <Col md>
                  <rb.Form.Group className="mb-3" controlId="rb.FormBasicEmail">
                    <rb.Form.Label>Select Degree</rb.Form.Label>
                    <rb.Form.Select aria-label="Floating label select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      
                    </rb.Form.Select>
                  </rb.Form.Group>
                </Col>
                
                </Row>
                <Row className="g-2">
                <Col md>
                  <rb.Form.Group className="mb-3" controlId="rb.FormBasicEmail">
                    <rb.Form.Label>Select Batch</rb.Form.Label>
                    <rb.Form.Select aria-label="Floating label select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      
                    </rb.Form.Select>
                  </rb.Form.Group>
                </Col>
                <Col md>
                  <rb.Form.Group className="mb-3" controlId="rb.FormBasicEmail">
                    <rb.Form.Label>Select Faculty</rb.Form.Label>
                    <rb.Form.Select aria-label="Floating label select example">
                      <option>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      
                    </rb.Form.Select>
                  </rb.Form.Group>
                </Col>
                
              </Row>
              <Row className="g-2">
                
                <Col md>
                  <rb.Form.Group className="mb-3" controlId="rb.FormBasicEmail">
                    <rb.Form.Label>Upload Files</rb.Form.Label>
                    <rb.Form.Control type="file" multiple accept='application/pdf,.docx,.csv,image/*'/>
                  </rb.Form.Group>
                </Col>
              </Row>
              <rb.Button variant="secondary" type="submit" className="btn btn-lg">
                Upload
              </rb.Button>
            </rb.Form>
          </div>
        </div>
      </div></div>
      </div>
    </>
  );
};

export default LecUploadAssignment;
