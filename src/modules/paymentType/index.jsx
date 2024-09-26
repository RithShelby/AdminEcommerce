import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePaymentType } from "./core/hook";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import CreatePaymentType from "./components/CreatePaymentType";
import UpdatePaymentType from "./components/UpdatePaymentType";
import {FilterComponent} from "../widget/SearchCustom";
import TableGlobal from "../widget/DataTable";
import {columnPaymentType} from "./components/table/column";

const PaymentType = () => {
  const { getPaymentType, getDeletePaymentType } = usePaymentType();
  const { paymentTypeList } = useSelector((state) => state.paymentTypes);
  const [showCreatePaymentType, setCreatePY] = useState(false);
  const [showUpdatePaymentType, setUpdatePY] = useState(false);
  const [catchPaymentType, setCatchPY] = useState(null);
  const handleShowCreatePY = () => {
    setCreatePY(true);
  };
  const handleCloseCreatePY = () => {
    setCreatePY(false);
  };
  const handleShowUpdatePY = (id) => {
    setCatchPY(id);
    setUpdatePY(true);
  };
  const handleCloseUpdatePY = () => {
    setUpdatePY(false);
  };
  useEffect(() => {
    getPaymentType();
  }, []);

  const onDeletePaymentType = (id) => {
    getDeletePaymentType(id);
  };
  return (
    <div className="mx-3 mt-5">
      <div className="">
        <h2 className="fw-bold">Payment Type</h2>
        <hr/>
        <FilterComponent create={handleShowCreatePY} search={false}/>
        <TableGlobal data={paymentTypeList} columns={columnPaymentType} />
      </div>
        <ModalComponent
          show={showCreatePaymentType}
          handleClose={handleCloseCreatePY}
          title="Create PaymentType"
          bodyModal={<CreatePaymentType handleClose={handleCloseCreatePY} />}
        />
        <ModalComponent
          show={showUpdatePaymentType}
          onHide={handleCloseUpdatePY}
          title="Update PaymentType"
          bodyModal={<UpdatePaymentType id={catchPaymentType} />}
        />
    </div>
  );
};

export default PaymentType;
