import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";

const ProductDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col className="product-desc">
          <div>{product?.new == true ? "New" : ""}</div>
          <div>{product?.title}</div>
          <div>₩ {product?.price}</div>
          <div>{product?.choice == true ? "Conscious choice" : ""}</div>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic" size="sm">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">
                {product?.size[0]}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">
                {product?.size[1]}
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3">
                {product?.size[2]}
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" size="sm">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
