import { Button, Container, Modal, Table, Spinner } from "react-bootstrap";
import Menu from "../../Component/Admin/Menu";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
// import nikhil from "../../assets/slider-images/nikhil.jpg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function AdminProduct() {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(false);
  const [productList, setproductList] = useState([]);
  const [search, setSearchProduct] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  function getAllProduct() {
    setLoading(true);
    axios.get(`http://localhost:8000/api/product/getall`).then((response) => {
      setproductList(response.data.data);
      setLoading(false);
    });
  }
  useEffect(() => {
    getAllProduct();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handlSave = () => {
    if (!title) {
      toast.error("Title is required");
      return;
    }
    if (!description) {
      toast.error("Description is required");
      return;
    }
    if (!image) {
      toast.error("Product image is required");
      return;
    }
    if (!price || price <= 0) {
      toast.error("Please enter a valid price");
      return;
    }
    if (!quantity || quantity <= 0) {
      toast.error("Please enter a valid quantity");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("image", image);
    // console.log("formData", title, description, image, price, quantity);
    axios
      .post(`http://localhost:8000/api/product/save`, formData)
      .then((response) => {
        // console.log("res", response);
        toast.success(response.data.message);
        // setproductList(response.data.data);
        setproductList([...productList, response.data.data]);
        setShow(false);
        setTitle("");
        setDescription("");
        setImage("");
        setPrice("");
        setQuantity("");
      });
  };
  // console.log("productList", productList);
  const handleSearchProduct = (e) => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/api/product/search?search=${search}`)
      .then((response) => {
        // console.log("search", response);
        if (response.data.success) {
          setproductList(response.data.data);
          setLoading(false);
        }
      });
  };
  const handleClearSearch = () => {
    setLoading(true);
    getAllProduct();
  };

  return (
    <>
      <Container>
        <Menu />
        <Button variant="primary" onClick={handleShow}>
          Add Product
        </Button>

        <div style={{ textAlign: "right" }}>
          <input
            type="search"
            id="site-search"
            value={search}
            onChange={(e) => setSearchProduct(e.target.value)}
            placeholder="Search Product..."
            style={{ marginRight: "10px" }}
          />
          <Button
            type="submit"
            style={{ marginRight: "10px" }}
            onClick={handleSearchProduct}
          >
            Search
          </Button>
          <Button onClick={handleClearSearch}>Clear</Button>
        </div>
        <h2>Product List</h2>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          <Table striped bordered hover responsive="md" className="table-sm">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              {productList.length > 0 ? (
                productList.map((elem, index) => (
                  <tr key={index}>
                    <td>{elem.title}</td>
                    <td>{elem.description}</td>
                    <td>
                      <img
                        src={`http://localhost:8000/images/uploads/${elem.image}`}
                        alt={elem.title}
                        width="100"
                        height="100"
                        style={{ objectFit: "cover" }}
                      />
                    </td>
                    <td>${elem.price}</td>
                    <td>{elem.quantity}</td>
                    <td>{elem.active}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        )}
      </Container>
      <ToastContainer />
      {/* Modal Start */}
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Header closeButton>
            <Modal.Title>Add Product </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Label>Description</Form.Label>
            <FloatingLabel
              controlId="floatingTextarea"
              className="mb-3"
              label="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
              <Form.Control as="textarea" />
            </FloatingLabel>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Product-Image</Form.Label>
              <Form.Control
                type="file"
                placeholder="Select Product Image"
                onChange={handleImageChange}
              />
              {preview && (
                <div className="mt-3">
                  <img
                    src={preview}
                    alt="Preview"
                    width="100"
                    height="100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlSave}>
              Save Product
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Modal End */}
    </>
  );
}
