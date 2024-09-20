import React, { useEffect, useState } from "react";
import { useShippingMethod } from "./core/hook";
import { useSelector } from "react-redux";
import CreateShippingMethod from "./components/CreateShippingMethod";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import UpdateShippingMethod from "./components/UpdateShippingMethod";
import TableGlobal from "../widget/DataTable";
import {columnShipping} from "./components/table/column";
import {FilterComponent} from "../widget/SearchCustom";
const ShippingMethod = () => {
  const { getShippingMethod, deleteShippingMethod } = useShippingMethod();
  const { listShoppingMethod } = useSelector((state) => state.shippingMethod);
  console.log(listShoppingMethod)
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
      <div className="">
        <h2 className="fw-bold">Shipping Method</h2>
        <hr/>
        <FilterComponent create={handleShowCreateModal} search={false}/>
        <TableGlobal data={listShoppingMethod} columns={columnShipping}/>
      </div>
        <ModalComponent
          show={showCreateShippingMethod}
          handleClose={handleCloseCreateModal}
          title="Create Shipping Method"
          bodyModal={<CreateShippingMethod handleClose={handleCloseCreateModal} />}
        />
        <ModalComponent
          show={showUpdateShippingMethod}
          onHide={handleCloseUpdateModal}
          title="Update Shipping Method"
          bodyModal={<UpdateShippingMethod id={catchShippingMethod} />}
        />
    </div>
  );
};

export default ShippingMethod;
