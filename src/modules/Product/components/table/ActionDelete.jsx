import React from "react";
import { GoTrash } from "react-icons/go";
import { useProducts } from "../../core/hook";
import { Link } from "react-router-dom";

const ActionDeleteProduct = ({ uuid }) => {
  const { deleteProduct } = useProducts();
  const handleDeleteProduct = () => {
    deleteProduct(uuid);
  };
  return (
    <Link to="#" onClick={handleDeleteProduct}>
      <GoTrash className="icon_hover text-dark" />
    </Link>
  );
};

export default ActionDeleteProduct;
