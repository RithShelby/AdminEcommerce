import React from "react";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";
import { useReviewProduct } from "../../core/hook";

const ActionDeleteUserReview = ({ id }) => {
  //   const { deleteProduct } = useProducts();
  const { getDeletedProductReview } = useReviewProduct();
  const handleDelete = () => {
    getDeletedProductReview(id);
  };
  return (
    <Link to="#" onClick={handleDelete}>
      <GoTrash className="icon_hover text-dark" />
    </Link>
  );
};

export default ActionDeleteUserReview;
