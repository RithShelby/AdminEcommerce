import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePaymentType } from "./core/hook";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { GoTrash } from "react-icons/go";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import CreatePaymentType from "./components/CreatePaymentType";
import UpdatePaymentType from "./components/UpdatePaymentType";

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
      <div className="d-flex justify-content-between mb-3">
        <h2 className="fw-bold">Payment Type</h2>
        <Link
          onClick={() => handleShowCreatePY()}
          className="btn btn-dark rounded-3"
        >
          <FiPlus className="m-auto" />
          Add Card
        </Link>
      </div>
      <div className=" table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="row">Card</th>
              <th scope="row"></th>
              <th scope="row"></th>
              <th scope="row">Action</th>
            </tr>
          </thead>
          <tbody>
            {paymentTypeList.map((payment) => {
              return (
                <tr key={payment.id}>
                  <td>{payment.value}</td>
                  <td></td>
                  <td></td>
                  <td className="">
                    <Link onClick={() => handleShowUpdatePY(payment.id)}>
                      <AiTwotoneEdit className="mx-2 icon_hover text-light" />
                    </Link>
                    <Link onClick={() => onDeletePaymentType(payment.id)}>
                      <GoTrash className="icon_hover text-light" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ModalComponent
          show={showCreatePaymentType}
          onHide={handleCloseCreatePY}
          title="Create PaymentType"
          bodyModal={<CreatePaymentType />}
        />
        <ModalComponent
          show={showUpdatePaymentType}
          onHide={handleCloseUpdatePY}
          title="Update PaymentType"
          bodyModal={<UpdatePaymentType id={catchPaymentType} />}
        />
      </div>
    </div>
  );
};

export default PaymentType;
