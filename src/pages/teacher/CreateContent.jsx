import { useState, useEffect } from "react";
import * as rb from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import DashboardHeader from "../../components/DashboardHeader";
import SideBar from "../../components/Sidebar";
import "../styles.css";

const CreateContent = () => {
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
        <SideBar  />
        <div className="dashboard-body">
          <div className="dashboard-content">
            <DashboardHeader />

            <div className="dashboard-content-container">
              <div className="dashboard-content-header">
                <h2>Create Content</h2>
              </div>
              <div className="d-grid gap-3">
                <rb.Form>
                  <Row className="g-2">
                    <Col md>
                      <rb.Form.Group
                        className="mb-3"
                        controlId="rb.FormBasicEmail"
                      >
                        <rb.Form.Label>Subject Name</rb.Form.Label>
                        <rb.Form.Control type="email" />
                      </rb.Form.Group>
                    </Col>
                    <Col md>
                      <rb.Form.Group
                        className="mb-3"
                        controlId="rb.FormBasicEmail"
                      >
                        <rb.Form.Label>Lesson Name</rb.Form.Label>
                        <rb.Form.Control type="email" />
                      </rb.Form.Group>
                    </Col>
                    
                  </Row>

                  <Row className="g-2">
                  <Col md>
                      <rb.Form.Group
                        className="mb-3"
                        controlId="rb.FormBasicEmail"
                      >
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
                      <rb.Form.Group
                        className="mb-3"
                        controlId="rb.FormBasicEmail"
                      >
                        <rb.Form.Label>Upload Files</rb.Form.Label>
                        <rb.Form.Control
                          type="file"
                          multiple
                          accept="application/pdf, image/*"
                        />
                      </rb.Form.Group>
                    </Col>
                  </Row>
                  <Col className="form-btn text-center">
                    <rb.Button
                      variant="secondary"
                      type="submit"
                      className="btn btn-lg w-25"
                    >
                      Submit
                    </rb.Button>
                  </Col>
                </rb.Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateContent;
