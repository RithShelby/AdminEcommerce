import React from "react";
import { useSelector } from "react-redux";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { useProductItem } from "../core/hook";

const ProductItemPagination = () => {
  const { getProductItem } = useProductItem();
  const { pagination } = useSelector((state) => state.productItem);

  const handlePageChange = (page) => {
    getProductItem(page);
  };

  return (
    <nav aria-label="Page navigation" className="d-flex justify-content-end">
      <ul className="pagination">
        <li
          className={`page-item ${
            pagination.currentPage === 1 ? "disabled" : ""
          }`}
        >
          <button
            className="page-link text-dark"
            onClick={() => handlePageChange(pagination.currentPage - 1)}
            aria-label="Previous"
          >
            <span aria-hidden="true">
              <MdNavigateBefore />
            </span>
          </button>
        </li>
        <li
          className={`page-item ${
            pagination.currentPage === 2 ? "disabled" : ""
          }`}
        >
          <button
            className="page-link text-dark"
            onClick={() => handlePageChange(pagination.currentPage + 1)}
            aria-label="Next"
          >
            <span aria-hidden="true">
              <MdNavigateNext />
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default ProductItemPagination;
