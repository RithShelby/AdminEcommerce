import React, { useEffect, useState } from "react";
import { useShippingMethod } from "./core/hook";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { GoTrash } from "react-icons/go";
import { AiTwotoneEdit } from "react-icons/ai";
import CreateShippingMethod from "./components/CreateShippingMethod";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import UpdateShippingMethod from "./components/UpdateShippingMethod";
const ShippingMethod = () => {
  const { getShippingMethod, deleteShippingMethod } = useShippingMethod();
  const { listShoppingMethod } = useSelector((state) => state.shippingMethod);
  const [showCreateShippingMethod, setCreateShippingMethd] = useState(false);
  const [showUpdateShippingMethod, setUpateShippingMethd] = useState(false);
  const [catchShippingMethod, setCatchShippingMethod] = useState(null);
  const handleShowCreateModal = () => {
    setCreateShippingMethd(true);
  };
  const handleCloseCreateModal = () => {
    setCreateShippingMethd(false);
  };
  const handleShowUpdateModal = (id) => {
    setCatchShippingMethod(id);
    setUpateShippingMethd(true);
  };
  const handleCloseUpdateModal = () => {
    setUpateShippingMethd(false);
  };
  useEffect(() => {
    getShippingMethod();
  }, []);

  const statusDelete = (id) => {
    deleteShippingMethod(id);
  };

  return (
    <div className="mt-5 mx-2">
      <div className="d-flex justify-content-between">
        <h2 className="fw-bold">Shipping Method</h2>
        <Link
          className="me-3 btn btn-dark m-auto"
          onClick={() => handleShowCreateModal()}
        >
          <FiPlus />
          New Shipping Method
        </Link>
      </div>
      <div className="table-responsive">
        <hr />
        <table className="table table-dark">
          <thead className="">
            <tr>
              <th scope="row">ID</th>
              <th scope="row">Product Name</th>
              <th scope="row">Price</th>
              <th scope="row">Action</th>
            </tr>
          </thead>
          <tbody>
            {listShoppingMethod.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td className="fw-bold">${item.price}</td>
                <td>
                  <Link onClick={() => handleShowUpdateModal(item.id)}>
                    <AiTwotoneEdit className="mx-2 icon_hover text-light" />
                  </Link>
                  <Link onClick={() => statusDelete(item.id)}>
                    <GoTrash className="icon_hover text-light" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalComponent
          show={showCreateShippingMethod}
          onHide={handleCloseCreateModal}
          title="Create Shipping Method"
          bodyModal={<CreateShippingMethod />}
        />
        <ModalComponent
          show={showUpdateShippingMethod}
          onHide={handleCloseUpdateModal}
          title="Update Shipping Method"
          bodyModal={<UpdateShippingMethod id={catchShippingMethod} />}
        />
      </div>
      {/* <UpdateShippingMethod/> */}
    </div>
  );
};

export default ShippingMethod;
