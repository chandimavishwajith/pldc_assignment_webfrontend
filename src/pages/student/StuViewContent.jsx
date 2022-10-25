import { useState, useEffect } from "react";
import * as rb from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import DashboardHeader from "../../components/DashboardHeader";
import SideBar from "../../components/Sidebar";
import "../styles.css";

const StuViewContent = () => {
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
        <SideBar />
        <div className="dashboard-body">
          <div className="dashboard-content">
            <DashboardHeader />

            <div className="dashboard-content-container">
              <div className="dashboard-content-header">
                <h2>View Contents & Assignments</h2>
              </div>

              {/* <div class="card-deck">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This card has supporting text below as a natural lead-in
                      to additional content.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </p>
                    <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>
              </div> */}

              <div className="d-grid gap-3">
                <Card
                  style={{
                    
                    backgroundColor: "#becefb",
                    margin: ".5rem",
                    borderRadius: ".5rem",
                  }}
                >
                  <Card.Body>
                    <Card.Title style={{ color: "#344470" }}>
                      Maths: Trigonometry
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Find length of a circle
                    </Card.Subtitle>

                    <rb.Button
                      variant="primary"
                      type="submit"
                      className="btn btn-sm"
                    >
                      Download
                    </rb.Button>
                  </Card.Body>
                </Card>
                <Card
                  style={{
                    
                    backgroundColor: "#9de0ff",
                    margin: ".5rem",
                    borderRadius: ".5rem",
                  }}
                >
                  <Card.Body>
                  
                    <Card.Title style={{ color: "#344470" }}>
                      Trigonometry: Assignment 01
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                    Find length of a circle
                    </Card.Subtitle>
                    <Card.Footer style={{ color: "#dc0000" }}>Marks: 56</Card.Footer>
                    <rb.Button
                      variant="primary"
                      type="submit"
                      className="btn btn-sm"
                    >
                      Download
                    </rb.Button>&emsp;
                    <Link to="/student/StuUploadAssignment">
                    <rb.Button
                      variant="secondary"
                      type="submit"
                      className="btn btn-sm"
                    >
                      Upload
                    </rb.Button></Link>
                  </Card.Body>
                </Card>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StuViewContent;
