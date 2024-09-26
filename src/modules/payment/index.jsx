import React, {createContext, useEffect, useState} from "react";
import { usePayment } from "./core/hook";
import { useSelector } from "react-redux";

import ModalComponent from "../modalCreateAndUpdate/modalCom";
import CreatePayment from "./components/CreatePayment";
import UpdatePayment from "./components/UpdatePayment";
import TableGlobal from "../widget/DataTable";
import {columnPayment} from "./components/table/column";
import {FilterComponent} from "../widget/SearchCustom";
export const PaymentContext = createContext();
const Payments = () => {
  const { getPayments, getDeletePayment } = usePayment();
  const { paymentList } = useSelector((state) => state.payments);
  const [search,setSearch] = useState("");
  const [showCreatePayment, setCreatePayment] = useState(false);
  const [showUpdatePayment, setUpdatePayment] = useState(false);
  const [catchPayment, setCatchPayment] = useState(null);
  const filterName = paymentList.filter((f)=>{
    return f.user.name.toLowerCase().includes(search.toLowerCase());
  })
  const handleSearch = (e)=>{
  setSearch(e.target.value)
  }

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
      <PaymentContext.Provider >
        <div className="row mt-5 mx-2">
          <div className="">
            <h2 className="fw-bold">All Payments</h2>
            <hr/>
            <FilterComponent create={handleShowCreatePayment} filterText={search} onFilter={handleSearch}/>
            <TableGlobal data={filterName} columns={columns}/>
          </div>
          <ModalComponent
              show={showCreatePayment}
              handleClose={handleCloseCreatePayment}
              title="Create Payment"
              bodyModal={<CreatePayment handleClose={handleCloseCreatePayment}/>}
          />
          <ModalComponent
              show={showUpdatePayment}
              onHide={handleCloseUpdatePayment}
              title="Update Payment"
              bodyModal={<UpdatePayment id={catchPayment}/>}
          />
          {/*</div>*/}
        </div>
      </PaymentContext.Provider>

  );
};

export default Payments;
