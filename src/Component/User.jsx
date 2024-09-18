import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Nav from "react-bootstrap/Nav";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
//Copy CSS from node modules and placed in out assest directory to apply ustom css
import "../assets/css/slider-styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import alexander from "../assets/slider-images/alexander.jpg";
import mk2 from "../assets/slider-images/mk-2.jpg";
import colin from "../assets/slider-images/colin-lloyd.jpg";
import girlWithRed from "../assets/slider-images/girl-with-red.jpg";
import nikhil from "../assets/slider-images/nikhil.jpg";

function User() {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const slider = (
    <AutoplaySlider
      animation="cubeAnimation"
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={3000}
    >
      <div data-src={alexander} style={{ height: "350px" }} />
      <div data-src={mk2} style={{ height: "350px" }} />
      <div data-src={colin} style={{ height: "350px" }} />
      <div data-src={girlWithRed} style={{ height: "350px" }} />
      <div data-src={nikhil} style={{ height: "350px" }} />
    </AutoplaySlider>
  );
  return (
    <>
      <Container>
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">
              <b>Home</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <b>Product</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <b>Link</b>
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <div className="slider">{slider}</div>
        <hr />
        <Row className="text-center my-4">
          <Col>
            <h1
            // style={{
            //   fontSize: "2.5rem",
            //   fontWeight: "bold",
            //   textAlign: "center",
            //   borderBottom: "3px solid #007bff", // Blue underline
            //   display: "inline-block",
            //   paddingBottom: "10px",
            // }}
            >
              Product Information
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Card
              style={{
                width: "18rem",
                height: "20rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Img
                src={girlWithRed}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <Card.Body style={{ flex: "1 1 auto" }}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ overflowY: "auto", height: "100px" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div style={{ padding: "1rem" }}>
                <Button variant="primary" style={{ width: "100%" }}>
                  View
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={4}>
            <Card
              style={{
                width: "18rem",
                height: "20rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Img
                src={nikhil}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <Card.Body style={{ flex: "1 1 auto" }}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ overflowY: "auto", height: "100px" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div style={{ padding: "1rem" }}>
                <Button variant="primary" style={{ width: "100%" }}>
                  View
                </Button>
              </div>
            </Card>
          </Col>
          <Col xs={4}>
            <Card
              style={{
                width: "18rem",
                height: "20rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Card.Img
                src={colin}
                style={{ height: "150px", objectFit: "cover" }}
              />
              <Card.Body style={{ flex: "1 1 auto" }}>
                <Card.Title>Card Title</Card.Title>
                <Card.Text style={{ overflowY: "auto", height: "100px" }}>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
              <div style={{ padding: "1rem" }}>
                <Button variant="primary" style={{ width: "100%" }}>
                  View
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default User;
