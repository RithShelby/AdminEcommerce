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
import {FilterComponent} from "../widget/SearchCustom";
import TableGlobal from "../widget/DataTable";
import {columnOrderStatus} from "./components/table/column";

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
      <div className="">
        <h2 className="fw-bold">Order Status</h2>
        <hr/>
        <FilterComponent create={handleShowCreateStatus}/>
        <TableGlobal data={listOrderStatus} columns={columnOrderStatus}/>
      </div>
        <ModalComponent
          show={showCreateStatus}
          handleClose={handleCloseCreateStatus}
          title="Create Order Status"
          bodyModal={<CreateOrderStatus handleClose={handleCloseCreateStatus} />}
        />
        <ModalComponent
          show={showUpdateStatus}
          onHide={handleCloseUpdateStatus}
          title="Create Order Status"
          bodyModal={<UpdateOrderStatus id={catchOrderStatus} />}
        />
      {/*</div>*/}
    </div>
  );
};

export default OrderStatus;
