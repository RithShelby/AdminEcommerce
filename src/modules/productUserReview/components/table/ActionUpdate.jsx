import React, { useContext } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductContext, ReviewProductContext } from "../..";

const ActionUpdateUserReview = ({ id }) => {
  const { setCatchReview, setShowUpdateReview } =
    useContext(ReviewProductContext);

  const handleShowUpdate = () => {
    setCatchReview(id);
    setShowUpdateReview(true);
  };

  return (
    <>
      <Link onClick={handleShowUpdate}>
        {" "}
        <AiTwotoneEdit className="mx-2 icon_hover text-dark" />
      </Link>
    </>
  );
};

export default ActionUpdateUserReview;
