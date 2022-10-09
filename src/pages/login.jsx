import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import * as rb from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

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
        <h4 style={{color: '#ffffff',marginBottom: '2rem'}}>Learning Management System</h4>
        
          <div className="login-content-header">
          <h4 style={{color: '#92a8e8',marginBottom: '1rem'}}><FontAwesomeIcon icon="fas fa-sign-in-alt" />&ensp;Login</h4>
            
          </div>
          <div className="d-grid gap-1" style={{marginTop: '1rem'}}>
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
