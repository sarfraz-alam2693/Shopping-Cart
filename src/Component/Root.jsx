import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; // Corrected import for Col
import Button from "react-bootstrap/Button"; // Corrected import for Button
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

function Root() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (email === "admin@yopmail.com" && password === "12345") {
      navigate("/admin/dashboard");
    } else if (email === "user@yopmail.com") {
      navigate("/user/dashboard");
    } else {
      alert("invalid Credencitials");
      navigate("/");
    }
  }
  function handleSignUp() {
    navigate("/signup");
  }
  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <h2>Log In</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicCheckbox"
              ></Form.Group>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </Form>
            <hr />
            <Button variant="primary" type="submit" onClick={handleSignUp}>
              Create new account
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Root;
