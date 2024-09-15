import React from "react";
import { Link } from "react-router-dom";

const itemsProduct = [
  {
    key: "1",
    label: (
      <Link className="nav-link" to="/products">
        All Product
      </Link>
    ),
  },
  {
    key: "5",
    label: (
      <Link className="nav-link" to="/user-review">
        Products Review
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link className="nav-link" to="/product-items">
        All Product Item
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link className="nav-link" to="/shopping-carts">
        Shopping Cart
      </Link>
    ),
  },
  {
    key: "4",
    label: (
      <Link className="nav-link" to="/categories">
        Category
      </Link>
    ),
  },
];
const itemsPayment = [
  {
    key: "1",
    label: (
      <Link className="nav-link" to="/payments">
        Payment
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link className="nav-link" to="/paymentType">
        Payment Type
      </Link>
    ),
  },
];
const itemsShipping = [
  {
    key: "1",
    label: (
      <Link className="nav-link" to="/shopping-order">
        Shopping Order
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link className="nav-link" to="/shipping-method">
        Shipping Method
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link className="nav-link" to="/order-line">
        Order Line
      </Link>
    ),
  },
];

export { itemsProduct, itemsPayment, itemsShipping };
