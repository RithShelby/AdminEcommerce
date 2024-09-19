import React, { createContext, useEffect, useState } from "react";
import { useProducts } from "./core/hook";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import CreateProduct from "./components/CreateProduct";
import UpdateProduct from "./components/UpdateProduct";
import Search from "../Search&Select/searchData";
import SelectData from "../Search&Select/selectData";
import ModalCreate from "../modalCreateAndUpdate/modalCom";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import TableGlobal from "../widget/DataTable";
import { ProductColunm } from "./components/table/colProduct";
import {FilterComponent} from "../widget/SearchCustom";
export const ProductContext = createContext();
const Product = () => {
  const { getProducts, deleteProduct } = useProducts();
  const { listProduct } = useSelector((state) => state.products);
  const [searchProduct, setSearchProduct] = useState("");
  const [selectProduct, setSelectProduct] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearchProduct = (e) => {
    setSearchProduct(e.target.value);
  };

  const handleSelectProduct = (e) => {
    setSelectProduct(e.target.value);
  };

  const handleShowUpdate = (uuid) => {
    setSelectedProduct(uuid);
    setShowUpdateModal(true);
  };

  const handleCloseUpdate = () => setShowUpdateModal(false);

  const handleShowCreate = () => setShowCreateModal(true);

  const handleCloseCreate = () => setShowCreateModal(false);

  const filteredItems = listProduct.filter((item) => {
    // Check if item and item.name are defined before calling toLowerCase()
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchProduct.toLowerCase());
    // Check if item, item.product, and item.product.category are defined
    const matchesCategory =
      !selectProduct ||
      (item && item.name && item.id === parseInt(selectProduct));

    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ setSelectedProduct, setShowUpdateModal }}>
      <div className="mx-3 my-5">
        <h2 className="fw-bold">All Products</h2>
        <hr />
        <FilterComponent onFilter={handleSearchProduct} filterText={searchProduct} create={handleShowCreate} placeholder={"Search Product Here..."}/>
        {/*<div className="row rounded-3 my-3">*/}
        {/*  <div className="col-sm-4  ">*/}
        {/*    <Search*/}
        {/*      value={searchProduct}*/}
        {/*      onChange={handleSearchProduct}*/}
        {/*      placeholder={"Search Product"}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className="col-sm-5 ">*/}
        {/*    <SelectData value={selectProduct} onchange={handleSelectProduct}>*/}
        {/*      <option value="">All Categories</option>*/}
        {/*      {listProduct.map((category, index) => (*/}
        {/*        <option key={index} value={category.id}>*/}
        {/*          {category.category.name}*/}
        {/*        </option>*/}
        {/*      ))}*/}
        {/*    </SelectData>*/}
        {/*  </div>*/}
        {/*  <div className="col-sm-2 m-auto">*/}
        {/*    <Link*/}
        {/*      className="btn btn-dark w-100 py-3"*/}
        {/*      onClick={() => handleShowCreate()}*/}
        {/*    >*/}
        {/*      <FiPlus /> New Product*/}
        {/*    </Link>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <TableGlobal columns={ProductColunm} data={filteredItems} />
        {/* <div className="row table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th></th>
                <th></th>
                <th>View</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div>
                      <img
                        src={item.image}
                        className="img-fluid rounded-3 me-3"
                        alt="Shopping item"
                        style={{ width: "28px" }}
                      />
                      {item.name}
                    </div>
                  </td>
                  <td>{item.category.name}</td>
                  <td></td>
                  <td></td>
                  <td>
                    <Link
                      to={`/product-detail/${item.uuid}`}
                      className="icon_hover"
                    >
                      <HiOutlineViewfinderCircle className="fs-5 text-light icon_hover" />
                    </Link>
                  </td>
                  <td>
                    <Link to="#" onClick={() => handleShowUpdate(item.uuid)}>
                      <AiTwotoneEdit className="me-2 icon_hover text-light" />
                    </Link>
                    <Link to="#" onClick={() => deleteProduct(item.uuid)}>
                      <GoTrash className="icon_hover text-light" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <ModalComponent
          show={showCreateModal}
          handleClose={handleCloseCreate}
          title="Create Product"
          bodyModal={<CreateProduct handleClose={handleCloseCreate} />}
        />
        <ModalComponent
          show={showUpdateModal}
          handleClose={handleCloseUpdate}
          title="Update Product"
          bodyModal={<UpdateProduct uuid={selectedProduct} handleClose={handleCloseUpdate} />}
        />
      </div>
    </ProductContext.Provider>
  );
};

export default Product;
