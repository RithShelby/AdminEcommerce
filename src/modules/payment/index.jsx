import React, { useEffect, useState } from "react";
import { usePayment } from "./core/hook";
import { useSelector } from "react-redux";

import ModalComponent from "../modalCreateAndUpdate/modalCom";
import CreatePayment from "./components/CreatePayment";
import UpdatePayment from "./components/UpdatePayment";
import TableGlobal from "../widget/DataTable";
import {columnPayment} from "./components/table/column";
import {FilterComponent} from "../widget/SearchCustom";

const Payments = () => {
  const { getPayments, getDeletePayment } = usePayment();
  const { paymentList } = useSelector((state) => state.payments);
  console.log(paymentList)
  const [showCreatePayment, setCreatePayment] = useState(false);
  const [showUpdatePayment, setUpdatePayment] = useState(false);
  const [catchPayment, setCatchPayment] = useState(null);
  const handleShowCreatePayment = () => {
    setCreatePayment(true);
  };
  const handleCloseCreatePayment = () => {
    setCreatePayment(false);
  };
  const handleShowUpdatePayment = (id) => {
    setCatchPayment(id);
    setUpdatePayment(true);
  };
  const handleCloseUpdatePayment = () => {
    setUpdatePayment(false);
  };

  useEffect(() => {
    getPayments();
  }, []);
  const handleDelete = (id) => {
    getDeletePayment(id);
  };
  const columns = columnPayment(handleDelete)
  return (
    <div className="row mt-5 mx-2">
      <div className="">
        <h2 className="fw-bold">All Payments</h2>
        <hr/>
        <FilterComponent create={handleShowCreatePayment}/>
        <TableGlobal data={paymentList} columns={columns}/>
      </div>
        <ModalComponent
          show={showCreatePayment}
          handleClose={handleCloseCreatePayment}
          title="Create Payment"
          bodyModal={<CreatePayment handleClose={handleCloseCreatePayment} />}
        />
        <ModalComponent
          show={showUpdatePayment}
          onHide={handleCloseUpdatePayment}
          title="Update Payment"
          bodyModal={<UpdatePayment id={catchPayment} />}
        />
      {/*</div>*/}
    </div>
  );
};

export default Payments;
