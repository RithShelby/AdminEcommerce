import { useSelector } from "react-redux";
import { useReviewProduct } from "../core/hook";
import { useFormik } from "formik";
import { useProducts } from "../../Product/core/hook";
import { useEffect } from "react";
import { OptionData } from "./OptionData";
import { TiStar } from "react-icons/ti";
import { IoStarSharp } from "react-icons/io5";

const CreateReview = () => {
  const { getCreateReviewProduct } = useReviewProduct();
  const { getProducts } = useProducts();
  const { listProduct } = useSelector((state) => state.products);
  useEffect(() => {
    getProducts();
  }, []);

  const createReviewFormik = useFormik({
    initialValues: {
      product_Id: [],
      ratingValue: null,
      comment: "",
      images: null,
    },
    onSubmit: (values) => {
      let product_Id = [];
      if (Array.isArray(values.product_Id)) {
        product_Id = values.product_Id.map((id) => parseInt(id));
      } else if (typeof values.product_Id === "string") {
        product_Id = [parseInt(values.product_Id)];
      }
      getCreateReviewProduct({ ...values, product_Id });
    },
  });

  // const onFileChange = (e) => {
  //   if (e.target.files && e.target.files.length > 0) {
  //     uploadSingleFile(e.target.files[0]);
  //   }
  // };

  return (
    <div>
      <form onSubmit={createReviewFormik.handleSubmit}>
        <div className="row mx-5">
          <div className="col-sm-6">
            <select
              name="product_Id"
              className="form-select py-3"
              onChange={createReviewFormik.handleChange}
              value={createReviewFormik.values.product_Id}
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
              value={createReviewFormik.values.ratingValue}
              className="form-control py-3"
              onChange={createReviewFormik.handleChange}
            >
              <option value="">Rating Star</option>
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
              value={createReviewFormik.values.comment}
              className="form-control py-3 bg-light my-4"
              type="text"
              placeholder="Feedback"
              onChange={createReviewFormik.handleChange}
            />
          </div>
          {/* <div className="col-sm-6">
              <input
                type="file"
                name="image"
                className="form-control py-3 my-4"
                value={createReviewFormik.values.image}
                onChange={(e) => {
                  createReviewFormik.handleChange(e);
                  onFileChange(e);
                }}
              />
            </div> */}

          <button type="submit" className="btn bg-success-subtle w-100 mt-4">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateReview;
