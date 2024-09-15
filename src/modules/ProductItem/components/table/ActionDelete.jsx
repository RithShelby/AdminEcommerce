import React from "react";
import { GoTrash } from "react-icons/go";
import { useProductItem, useProducts } from "../../core/hook";
import { Link } from "react-router-dom";

const ActionDeleteProductItem = ({ id }) => {
  const { deleteProductItem } = useProductItem();
  const handleDeleteProductItem = () => {
    deleteProductItem(id);
  };

  return (
    <Link to="#" onClick={handleDeleteProductItem}>
      <GoTrash className="icon_hover text-dark" />
    </Link>
  );
};

export default ActionDeleteProductItem;
