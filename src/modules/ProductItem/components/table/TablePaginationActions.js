import React from "react";
import { IconButton } from "@mui/material";
import {
  FirstPage,
  LastPage,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { useProductItem } from "../../core/hook";
import { useSelector } from "react-redux";

const TablePaginationActions = () => {
  const { getProductItem } = useProductItem();
  const { pagination } = useSelector((state) => state.productItem);

  const handlePageChange = (page) => {
    getProductItem(page);
  };

  const handleFirstPageButtonClick = () => {
    handlePageChange(1);
  };

  const handleBackButtonClick = () => {
    if (pagination.currentPage > 1) {
      handlePageChange(pagination.currentPage - 1);
    }
  };

  const handleNextButtonClick = () => {
    if (pagination.currentPage < pagination.totalPages) {
      handlePageChange(pagination.currentPage + 1);
    }
  };

  const handleLastPageButtonClick = () => {
    handlePageChange(pagination.totalPages);
  };

  return (
    <>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={pagination.currentPage === 1}
        aria-label="first page"
      >
        <FirstPage />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={pagination.currentPage === 1}
        aria-label="previous page"
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={pagination.currentPage === pagination.totalPages}
        aria-label="next page"
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={pagination.currentPage === pagination.totalPages}
        aria-label="last page"
      >
        <LastPage />
      </IconButton>
    </>
  );
};

export default TablePaginationActions;
