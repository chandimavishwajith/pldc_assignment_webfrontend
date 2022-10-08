import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import * as rb from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Login = () => {
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
      <div className="login-content">
        <div className="login-content-container">
          <div className="login-content-header">
            <h2>Login</h2>
          </div>
          <div className="d-grid gap-1">
            <rb.Form>
              
                <rb.Form.Group className="mb-3" controlId="rb.FormBasicEmail">
                  <rb.Form.Label className="login-content-label">
                    Username
                  </rb.Form.Label>
                  <rb.Form.Control type="email" />
                </rb.Form.Group>
              
                <rb.Form.Group className="mb-3" controlId="rb.FormBasicEmail">
                  <rb.Form.Label className="login-content-label">
                    Password
                  </rb.Form.Label>
                  <rb.Form.Control type="password" />
                </rb.Form.Group>
              
              <Col md className="text-center my-4">
                <Button type="submit" size="md" className="btn w-100 login-button">
                  Log In
                </Button>
              </Col>
              
            </rb.Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
