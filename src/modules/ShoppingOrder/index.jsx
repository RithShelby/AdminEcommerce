import React, { createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useShoppingOrder } from "./core/hook";
import { GoTrash } from "react-icons/go";
import { AiTwotoneEdit } from "react-icons/ai";

import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import Loading from "../loading";
import { Button } from "antd";
import CreateShopOrder from "./components/CreateShopOrder";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import UpdateShopOrder from "./components/UpdateShopOrder";
import CreateByCart from "./components/CreateByCart";

export const OffcanvasContext = createContext();

const ShoppingOrder = () => {
  const { getShoppingOrder, deleteShoppingOrder } = useShoppingOrder();
  const { listShoppingOrder } = useSelector((state) => state.shoppingOrders);
  const { loadingList } = useSelector((state) => state.loading);
  const [showCreateShopOrder, setCreateShopOrder] = useState(false);
  const [showUpdateShopOrder, setUpdateShopOrder] = useState(false);
  const [catchShopOrder, setCatchShopOrder] = useState(null);
  const handleShowCreateShopOrder = () => {
    setCreateShopOrder(true);
  };
  const handleCloseCreateShopOrder = () => {
    setCreateShopOrder(false);
  };
  const handleShowUpdateShopOrder = (id) => {
    setCatchShopOrder(id);
    setUpdateShopOrder(true);
  };
  const handleCloseUpdateShopOrder = () => {
    setUpdateShopOrder(false);
  };
  // console.log(listShoppingOrder);
  useEffect(() => {
    getShoppingOrder();
  }, []);
  const handleDelete = (id) => {
    deleteShoppingOrder(id);
  };
  if (loadingList) return <Loading />;
  return (
    <div className=" mt-5 mx-2 ">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fw-bold">Shopping Order By User</h2>{" "}
        <Link
          className="me-3 btn btn-dark"
          onClick={() => handleShowCreateShopOrder()}
        >
          <FiPlus />
          New Shopping Order
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table-dark table">
          <thead className="">
            <tr>
              <th scope="row">Product Name</th>
              <th scope="row">Price</th>
              <th scope="row">Category</th>
              <th scope="row">Shipping Method</th>
              <th scope="row">Cash</th>
              <th scope="row">Qty</th>
              <th scope="row">Status</th>
              <th scope="row">Address</th>
              <th scope="row">Action</th>
            </tr>
          </thead>
          <tbody>
            {listShoppingOrder.map((order) =>
              order.orderLines.map((line) => (
                <tr key={line.id}>
                  <td className="">
                    <img
                      className=" img-fluid rounded-3"
                      style={{ width: "28px" }}
                      src={line.productItem.image}
                      alt=""
                    />
                    {line.productItem.product.name}
                  </td>
                  <td>${line.price}</td>
                  <td>{line.productItem.product.category.name}</td>
                  <td>
                    <span className="badge rounded-pill text-bg-dark">
                      {order.shippingMethod.name}
                    </span>
                  </td>
                  <td>${order.shippingMethod.price}</td>
                  <td>{line.quantity}</td>

                  <td>
                    <span className="badge text-bg-primary">
                      {order.orderStatus.status}
                    </span>
                  </td>
                  <td>{order.shippingAddress}</td>
                  <td className="">
                    <Link onClick={() => handleShowUpdateShopOrder(order.id)}>
                      <AiTwotoneEdit className="mx-2 icon_hover text-secondary" />
                    </Link>
                    <Link onClick={() => handleDelete(order.id)}>
                      <GoTrash className="icon_hover text-secondary" />
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <ModalComponent
          show={showCreateShopOrder}
          onHide={handleCloseCreateShopOrder}
          title="Create Shop Order"
          bodyModal={<CreateByCart />}
        />
        <ModalComponent
          show={showUpdateShopOrder}
          onHide={handleCloseUpdateShopOrder}
          title="Update Shop Order"
          bodyModal={<UpdateShopOrder id={catchShopOrder} />}
        />
        {/* <CreateShopOrder /> */}
      </div>
    </div>
  );
};

export default ShoppingOrder;
