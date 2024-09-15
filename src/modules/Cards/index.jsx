import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { useProductItem } from "../ProductItem/core/hook";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductItemPagination from "../ProductItem/components/proPagination";
const CardDemo = ({ data, productPagination }) => {
  const { getProductItem } = useProductItem();
  useEffect(() => {
    getProductItem();
  }, []);
  return (
    <>
      {data.map((item) => (
        <div className="col-lg-3 col-md-3 col-sm-12 my-4">
          <Card
            className="border-0 rounded-3"
            key={item.id}
            style={{
              height: "100%",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            }}
          >
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <p className="fs-6">{item.product.name}</p>
              <Card.Text>
                {/* {item.product.description}
                <br /> */}
                <strong>Price:</strong> ${item.price}
                <br />
                <strong>Quantity:</strong> {item.quantity}
              </Card.Text>
            </Card.Body>
            <Link to="/shopping-cart" className="m-2">
              <button className="btn btn-light fw-bold rounded-3 w-100">
                Go Shopping Cart
              </button>
            </Link>
          </Card>
        </div>
      ))}
      <ProductItemPagination />
    </>
  );
};

export default CardDemo;
