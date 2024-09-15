import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProductItem } from "../core/hook";
import { useSelector } from "react-redux";
import CreateProductItem from "./CreateProductItem";
import { FiPlus } from "react-icons/fi";
import UpProItem from "./UpProItem";
import { CiEdit } from "react-icons/ci";

const PItemDetail = () => {
  const { id } = useParams();
  const { showProductItembyId } = useProductItem();

  const productId = useSelector((state) => state.productItem.productById);
  useEffect(() => {
    showProductItembyId(id);
  }, []);
  console.log(productId);
  return (
    <div className="row p-5 ">
      <div
        className="d-flex justify-content-evenly p-5 bg-light rounded-4"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <div className="position-relative">
          <span className="badge text-bg-primary rounded-3  position-absolute m-2 px-2">
            {productId && productId.product && productId.product.category.name
              ? productId.product.category.name
              : "Loading"}
          </span>
          <img
            className="w-75 "
            src={productId ? productId.image : "Loading"}
            alt=""
          />
        </div>
        <div className="">
          {" "}
          <p className="fs-6 text-dark mt-3">
            {productId && productId.product && productId.product.name
              ? productId.product.name
              : "Loading"}
          </p>
          <p className="fs-4 fw-bold text-dark mt-3">
            {productId ? productId.code : "Loading"}
          </p>
          <p className="fs-6 text-dark mt-3">
            {productId && productId.product && productId.product.description
              ? productId.product.description
              : "Loading"}
          </p>
          <div className="d-flex text-dark align-items-center text-start">
            <p className="fs-4">
              Price :{" "}
              <span className="fw-bold">
                $ {productId ? productId.price : "Loading"}
              </span>
            </p>
            <p className="fs-4 ms-5">
              Quantity:{" "}
              <span className="fw-bold">
                {productId ? productId.quantity : "Loading"}
              </span>
            </p>
          </div>
          <div className="d-flex mt-4">
            <Link to="/shopping-carts" className="btn btn-success">
              <FiPlus className="fs-5 me-2" />
              Go to shopping carts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PItemDetail;
