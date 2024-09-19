import React from "react";
import { GoTrash } from "react-icons/go";

import { Link } from "react-router-dom";
import {useSweetAlert} from "../../../SweetAlert";

const ActionDeleteProductItem = ({ id }) => {
  // const { deleteProductItem } = useProductItem();
  const {ConfirmDelete} = useSweetAlert();
  const handleDeleteProductItem = () => {
    // deleteProductItem(id);
    ConfirmDelete();
  };

  return (
    <Link to="#" onClick={handleDeleteProductItem}>
      <GoTrash className="icon_hover text-dark" />
    </Link>
  );
};

export default ActionDeleteProductItem;
