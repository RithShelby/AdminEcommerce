import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useReviewProduct } from "./core/hook";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { FiPlus } from "react-icons/fi";
import { TiStar } from "react-icons/ti";
import CreateReview from "./components/CreateReview";
import SelectData from "../Search&Select/selectData";
import { OptionData } from "./components/OptionData";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import UpdateUserReview from "./components/UpdateUserReview";
import TableGlobal from "../widget/DataTable";
import { UserReviewColunm } from "./components/table/colUserReview";
export const ReviewProductContext = createContext();
const ReviewProduct = () => {
  const { getReviewProduct, getDeletedProductReview } = useReviewProduct();
  const { listReview, selectedRating } = useSelector(
    (state) => state.reviewProducts
  );
  const [showCreateReview, setShowCreateReview] = useState(false);
  const [showUpdateReview, setShowUpdateReview] = useState(false);
  const [catchReview, setCatchReview] = useState(null);
  const handleShowCreateReview = () => {
    setShowCreateReview(true);
  };
  const handleCloseCreateReview = () => {
    setShowCreateReview(false);
  };
  const handleShowUpdateReview = (id) => {
    setCatchReview(id);
    setShowUpdateReview(true);
  };
  const handleCloseUpdateReview = () => {
    setShowUpdateReview(false);
  };
  const handleChange = (e) => {
    const rate = e.target.value;
    getReviewProduct(rate);
  };
  useEffect(() => {
    getReviewProduct();
  }, []);

  return (
    <ReviewProductContext.Provider
      value={{ setCatchReview, setShowUpdateReview }}
    >
      <div className="row mx-3">
        <h2 className="fw-bold">User Review</h2>
        <hr />
        <div className="row mb-4 d-flex">
          <div className="col-lg-7">
            <SelectData value={selectedRating} onchange={handleChange}>
              <option value="0">All</option>
              {OptionData.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.option}
                </option>
              ))}
            </SelectData>
          </div>
          <div className="col-lg-5 d-flex justify-content-end">
            {" "}
            <Link
              className="btn btn-dark m-auto w-50 py-3 "
              onClick={() => handleShowCreateReview()}
            >
              <FiPlus />
              New Rating
            </Link>
          </div>
        </div>
        <TableGlobal columns={UserReviewColunm} data={listReview} />

        <ModalComponent
          show={showCreateReview}
          onHide={handleCloseCreateReview}
          title="Create Review"
          bodyModal={<CreateReview />}
        />
        <ModalComponent
          show={showUpdateReview}
          onHide={handleCloseUpdateReview}
          title="Update Review"
          bodyModal={<UpdateUserReview id={catchReview} />}
        />
      </div>
    </ReviewProductContext.Provider>
  );
};

export default ReviewProduct;
