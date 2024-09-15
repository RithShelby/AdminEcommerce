import React, { useContext } from "react";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ProductContext } from "../..";
import { GoTrash } from "react-icons/go";
import { useProducts } from "../../core/hook";

const ActionUpdateProduct = ({ uuid }) => {
  const { setSelectedProduct, setShowUpdateModal } = useContext(ProductContext);

  const handleShowUpdate = () => {
    setSelectedProduct(uuid);
    setShowUpdateModal(true);
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

export default ActionUpdateProduct;
