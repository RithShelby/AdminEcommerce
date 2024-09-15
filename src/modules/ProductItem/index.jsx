import React, { createContext, useEffect, useMemo, useState } from "react";
import { useProductItem } from "./core/hook";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreateProductItem from "./components/CreateProductItem";
import UpProItem from "./components/UpProItem";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Search from "../Search&Select/searchData";
import SelectData from "../Search&Select/selectData";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import TableGlobal from "../widget/DataTable";
import { ProductItemColunm } from "./components/table/colProductItem";
import ProductItemPagination from "./components/proPagination";
import TablePaginationActions from "./components/table/TablePaginationActions";
import CardDemo from "../Cards";
export const ProductItemContext = createContext();
const ProductItem = () => {
  const { getProductItem } = useProductItem();
  const { productItemList, pagination } = useSelector(
    (state) => state.productItem
  );
  const [searchName, setSearchName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCreateProductItem, setCreateProductItem] = useState(false);
  const [showUpdateProductItem, setUpdateProductItem] = useState(false);
  const [catchProductItem, setCatchProductItem] = useState(null);
  // const { list } = useMemo(() => productItemList, [productItemList]);
  // console.log(list);
  const handleShowCreateProductItem = () => {
    setCreateProductItem(true);
  };
  const handleCloseCreateProductItem = () => {
    setCreateProductItem(false);
  };
  const handleShowUpdateProductItem = (id) => {
    setCatchProductItem(id);
    setUpdateProductItem(true);
  };
  const handleCloseUpdateProductItem = () => {
    setUpdateProductItem(false);
  };

  const handleSearchChange = (event) => {
    setSearchName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = productItemList.filter((item) => {
    // Check if item and item.name are defined before calling toLowerCase()
    const matchesSearch = item.product.name
      .toLowerCase()
      .includes(searchName.toLowerCase());
    // Check if item, item.product, and item.product.category are defined
    const matchesCategory =
      !selectedCategory ||
      (item &&
        item.product &&
        item.product.category &&
        item.product.category.id === parseInt(selectedCategory));

    return matchesSearch && matchesCategory;
  });
  // select all products item
  const [selectedRows, setSelectedRows] = useState(false);
  const [toggledClearRows, setToggleClearRows] = useState(false);
  const handleChange = ({ selectedRows }) => {
    setSelectedRows(selectedRows);
  };

  // Toggle the state so React Data Table changes to clearSelectedRows are triggered
  const handleClearRows = () => {
    setToggleClearRows(!toggledClearRows);
  };
  useEffect(() => {
    getProductItem();
  }, []);
  return (
    <ProductItemContext.Provider
      value={{ setCatchProductItem, setUpdateProductItem }}
    >
      <div className=" mt-5 mx-4">
        <h2 className="fw-bold">All Product Item</h2>
        <hr />
        <div className="row rounded-3">
          <div className="col-sm-4 m-auto ">
            <Search
              value={searchName}
              onChange={handleSearchChange}
              placeholder={"Search Product Item"}
            />
          </div>
          <div className="col-sm-5 m-auto my-3">
            <SelectData
              value={selectedCategory}
              onchange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {productItemList.map((category, index) => (
                <option key={index} value={category.product.category.id}>
                  {category.product.category.name}
                </option>
              ))}
            </SelectData>
          </div>
          <div className="col-sm-2 m-auto mb-4">
            {" "}
            <Link
              className="btn btn-dark w-100 py-2"
              onClick={() => handleShowCreateProductItem()}
            >
              New Product Item
              {/* <CreateProductItem /> */}
            </Link>
          </div>
        </div>

        <TableGlobal
          columns={ProductItemColunm}
          data={filteredItems}
          handleChange={handleChange}
          toggledClearRows={toggledClearRows}
          productPagination={ProductItemPagination}
        />
        <ModalComponent
          show={showCreateProductItem}
          onHide={handleCloseCreateProductItem}
          title="Create Product Item"
          bodyModal={<CreateProductItem />}
        />
        <ModalComponent
          show={showUpdateProductItem}
          onHide={handleCloseUpdateProductItem}
          title="Update Product Item"
          bodyModal={<UpProItem id={catchProductItem} />}
        />
      </div>
    </ProductItemContext.Provider>
  );
};

export default ProductItem;
