import React, { useEffect } from "react";
import { useReviewProduct } from "../core/hook";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { OptionData } from "./OptionData";
import { useParams } from "react-router-dom";
import { useProducts } from "../../Product/core/hook";

const UpdateUserReview = ({ id }) => {
  // const { id } = useParams();
  const { getUpdateUserReview } = useReviewProduct();
  const { getProducts } = useProducts();
  const { listProduct } = useSelector((state) => state.products);
  const { listReview } = useSelector((state) => state.reviewProducts);
  const reviewId = listReview.find((review) => review.id == id);
  // const productId = listProduct.map((product) => product.id);
  // const updateId = reviewId.products.map((id) => id.uuid);
  console.log(reviewId);
  useEffect(() => {
    getProducts();
  }, []);

  const updateUserReviewFormik = useFormik({
    initialValues: {
      product_Id: reviewId?.product_Id || [],
      ratingValue: reviewId?.ratingValue || null,
      comment: reviewId?.comment || "",
      images: null,
    },
    onSubmit: (values) => {
      let product_Id = [];
      if (Array.isArray(values.product_Id)) {
        product_Id = values.product_Id.map((id) => parseInt(id));
      } else if (typeof values.product_Id === "string") {
        product_Id = [parseInt(values.product_Id)];
      }
      getUpdateUserReview(id, { ...values, product_Id });
    },
  });

  return (
    <div className="row">
      <form onSubmit={updateUserReviewFormik.handleSubmit}>
        <div className="row mx-5">
          <div className="col-sm-6">
            <select
              name="product_Id"
              className="form-select py-3"
              onChange={updateUserReviewFormik.handleChange}
              value={updateUserReviewFormik.values.product_Id}
            >
              <option>Select Product </option>
              {listProduct.map((product) => {
                return (
                  <option value={product.id} key={product.id}>
                    {product.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-sm-6">
            <select
              name="ratingValue"
              value={updateUserReviewFormik.values.ratingValue}
              className="form-control py-3"
              onChange={updateUserReviewFormik.handleChange}
            >
              <option value="">Rating Stars</option>
              {OptionData.map((star) => (
                <option key={star.id} value={star.value}>
                  {star.option}
                </option>
              ))}
            </select>
          </div>
          <div className="col-sm-12">
            <input
              name="comment"
              value={updateUserReviewFormik.values.comment}
              className="form-control py-3 bg-light my-4"
              type="text"
              placeholder="Feedback"
              onChange={updateUserReviewFormik.handleChange}
            />
          </div>

          <button type="submit" className="btn bg-success-subtle w-100 mt-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserReview;
