import React, { useEffect, useState } from "react";
import { useOrderStatus } from "./core/hook";
import { useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";
import CreateOrderStatus from "./components/CreateOrderStatus";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import UpdateOrderStatus from "./components/UpdateOrderStatus";

const OrderStatus = () => {
  const { getOrderStatus, deleteOrderStatus } = useOrderStatus();
  const { listOrderStatus } = useSelector((state) => state.orderStatus);
  const [showCreateStatus, setCreateStatus] = useState(false);
  const [showUpdateStatus, setUpdateStatus] = useState(false);
  const [catchOrderStatus, setCatchOrderStatus] = useState(null);
  const handleShowCreateStatus = () => {
    setCreateStatus(true);
  };
  const handleCloseCreateStatus = () => {
    setCreateStatus(false);
  };
  const handleShowUpdateStatus = (id) => {
    setCatchOrderStatus(id);
    setUpdateStatus(true);
  };
  const handleCloseUpdateStatus = () => {
    setUpdateStatus(false);
  };
  // console.log(listOrderStatus);
  useEffect(() => {
    getOrderStatus();
  }, []);
  const orderDelete = (id) => {
    deleteOrderStatus(id);
  };
  return (
    <div className=" mt-5 mx-2">
      <div className="d-flex justify-content-between">
        <h2 className="fw-bold">Order Status</h2>
        <Link
          className="me-3 btn btn-dark m-auto"
          onClick={() => handleShowCreateStatus()}
        >
          <FiPlus />
          New Order Status
        </Link>
      </div>
      <div className="table-responsive">
        <hr />
        <table className="table table-dark">
          <thead className="table-light">
            <tr>
              <th scope="row">ID</th>
              <th scope="row">Status</th>
              <th scope="row">Action</th>
            </tr>
          </thead>
          <tbody>
            {listOrderStatus.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.status}</td>
                <td>
                  <Link onClick={() => handleShowUpdateStatus(item.id)}>
                    <AiTwotoneEdit className="mx-2 icon_hover text-light" />
                  </Link>
                  <Link onClick={() => orderDelete(item.id)}>
                    <GoTrash className="icon_hover text-light" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalComponent
          show={showCreateStatus}
          onHide={handleCloseCreateStatus}
          title="Create Order Status"
          bodyModal={<CreateOrderStatus />}
        />
        <ModalComponent
          show={showUpdateStatus}
          onHide={handleCloseUpdateStatus}
          title="Create Order Status"
          bodyModal={<UpdateOrderStatus id={catchOrderStatus} />}
        />
      </div>
    </div>
  );
};

export default OrderStatus;
