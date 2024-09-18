import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Menu from "../../Component/User/Menu";
import axios from "axios";
import { useEffect, useState } from "react";

function UserProduct() {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [search, setSearchProduct] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    axios
      .get(`http://localhost:8000/api/user/product/?active=1`)
      .then((response) => {
        console.log("response", response);
        setProduct(response.data.data);
      });
  }
  const cardDescriptionStyle = {
    height: "30px",
    overflowY: "auto",
  };
  const handleAddToCart = (elem) => {
    console.log("elem", elem);
    setCart((previewList) => [...previewList, elem]);
  };
  // console.log("cart", cart);

  const handleSearchProduct = () => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/product/search?search=${search}`)
      .then((response) => {
        console.log("search", response);
        if (response.data.success) {
          setProduct(response.data.data);
          setLoading(false);
        }
      });
  };
  const handleClearSearch = () => {
    setLoading(true);
    getProduct();
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Container>
        <Menu />
        <Row>
          <h2>Buy a Product</h2>
          <div className="d-flex mb-3">
            <input
              type="search"
              id="site-search"
              value={search}
              onChange={(e) => setSearchProduct(e.target.value)}
              placeholder="Search Product..."
              style={{ width: "200px", marginRight: "10px" }} // Adjust the width as needed
            />
            <Button onClick={handleClearSearch}>Clear</Button>
            <Button
              type="submit"
              style={{ whiteSpace: "nowrap" }}
              onClick={handleSearchProduct}
            >
              Search
            </Button>
            <div className="cart">
              Cart<span>({cart.length})</span>
            </div>
          </div>
          {product && product.length > 0 ? (
            product.map((elem) => (
              <Col md={4} key={elem.id} className="mb-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src={`http://localhost:8000/images/uploads/${elem.image}`}
                    alt={elem.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title>{elem.title.toUpperCase()}</Card.Title>
                    <Card.Text style={cardDescriptionStyle}>
                      {elem.description}
                    </Card.Text>
                    <Button
                      variant="success"
                      onClick={() => handleAddToCart(elem)}
                      className="me-2"
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p>No products available</p>
          )}
        </Row>
      </Container>
    </>
  );
}
export default UserProduct;
