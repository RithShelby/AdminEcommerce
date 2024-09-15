import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../core/hook";
import { useSelector } from "react-redux";
import ProductReview from "./UserReviewByProduct";

const ProductDetail = () => {
  const { uuid } = useParams();
  const { showProductByUuid } = useProducts();
  const { productByUuid } = useSelector((state) => state.products);
  console.log(productByUuid);
  useEffect(() => {
    showProductByUuid(uuid);
  }, []);
  return (
    <div className="col-lg-12 p-4">
      <div className="bg-light card border-0 p-4">
        <div className="row">
          <div className="col-md-3">
            <div className="d-block position-relative">
              <span className="badge text-bg-primary rounded-3 position-absolute m-2 px-2">
                {productByUuid ? productByUuid.id : "Loading..."}
              </span>

              <img
                className="w-100 h-100 img_card_hover"
                src={productByUuid ? productByUuid.image : "Loading"}
                alt=""
              />
            </div>
          </div>
          <div className="col-md-9 px-3">
            <div className="card-block px-6 border-0">
              <h4 className="card-title text-dark">
                {productByUuid ? productByUuid.name : "Loading..."}
              </h4>
              <p className="card-text text-dark">
                {productByUuid ? productByUuid.description : "Loading.."}
              </p>

              <br />
              <div className="d-flex">
                <Link to={`/user-review-product/${productByUuid.uuid}`}>
                  <button className="btn btn-dark me-3">Rating</button>
                </Link>
                <Link to="/products">
                  <button className="btn btn-dark ">Go to Product</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
