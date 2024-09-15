import React, { useContext } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductItemContext } from "../..";

const ActionUpdateProductItem = ({ id }) => {
  const { setCatchProductItem, setUpdateProductItem } =
    useContext(ProductItemContext);

  const handleShowUpdate = () => {
    setCatchProductItem(id);
    setUpdateProductItem(true);
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

export default ActionUpdateProductItem;
