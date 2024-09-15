import React, { useEffect, useState } from "react";
import { useShopCart } from "./core/hook";
import { useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import CreateShopCart from "./components/CreateShopCart";
import Loading from "../loading";
import SelectData from "../Search&Select/selectData";
import Search from "../Search&Select/searchData";
import ModalComponent from "../modalCreateAndUpdate/modalCom";

const ShoppingCart = () => {
  const { getShopCart } = useShopCart();
  const { shopCartList } = useSelector((state) => state.shoppingCart);
  const { loadingList } = useSelector((state) => state.loading);
  const [searchCart, setSearchCart] = useState("");
  const [selectCart, setSelectCart] = useState("");
  const [showCreateModal, setCreateModal] = useState(false);
  const handleShowCreateModal = () => {
    setCreateModal(true);
  };
  const handleCloseCreateModal = () => {
    setCreateModal(false);
  };
  const handleSearchCart = (e) => {
    setSearchCart(e.target.value);
  };

  const handleSelectCart = (e) => {
    setSelectCart(e.target.value);
  };

  const filterItem = shopCartList
    .flatMap((cart) => cart.shoppingCartItems)
    .filter((shopItem) => {
      const matchSearch = shopItem.productItem.product.name
        .toLowerCase()
        .includes(searchCart.toLowerCase());
      const matchSelect =
        !selectCart ||
        (shopItem &&
          shopItem.productItem &&
          shopItem.productItem.product.name &&
          shopItem.id === parseInt(selectCart));
      return matchSearch && matchSelect;
    });

  useEffect(() => {
    getShopCart();
  }, []);

  if (loadingList) return <Loading />;

  return (
    <div className="mt-5 mx-2">
      <div className="d-flex justify-content-between">
        <h2 className="fw-bold">Shopping Cart</h2>
      </div>
      <div className="row rounded-3 m-3">
        <div className="col-sm-4 m-auto">
          <Search
            value={searchCart}
            onChange={handleSearchCart}
            placeholder={"Search Shop Cart"}
          />
        </div>
        <div className="col-sm-5 m-auto my-3">
          <SelectData value={selectCart} onChange={handleSelectCart}>
            <option value="">All Categories</option>
            {shopCartList.map((item) => {
              return item.shoppingCartItems.map((shopItem, index) => (
                <option key={index} value={shopItem.id}>
                  {shopItem.productItem.product.id}
                </option>
              ));
            })}
          </SelectData>
        </div>
        <div className="col-sm-2 m-auto">
          <Link
            className="me-3 btn btn-dark"
            onClick={() => handleShowCreateModal()}
          >
            <FiPlus />
            New Shopping
          </Link>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="row">Product Name</th>
              <th scope="row">Category</th>
              <th scope="row">Price</th>
              <th scope="row">Quantity</th>
              <th scope="row">Action</th>
            </tr>
          </thead>
          <tbody>
            {filterItem.map((itemShop) => (
              <tr key={itemShop.id}>
                <td>
                  <img
                    style={{ width: "28px" }}
                    className="img-fluid rounded-3"
                    src={itemShop.productItem.image}
                    alt=""
                  />
                  {itemShop.productItem.product.name}
                </td>
                <td>{itemShop.productItem.product.category.name}</td>
                <td>${itemShop.productItem.price.toFixed(2)}</td>
                <td>{itemShop.quantity}</td>
                <td className="">
                  <Link>
                    <AiTwotoneEdit className="me-2 icon_hover text-light" />
                  </Link>
                  <Link>
                    <GoTrash className="icon_hover text-light" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalComponent
          show={showCreateModal}
          onHide={handleCloseCreateModal}
          title="Create Shopping Cart"
          bodyModal={<CreateShopCart />}
        />
      </div>
    </div>
  );
};

export default ShoppingCart;
