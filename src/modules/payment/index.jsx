import React, { useEffect, useState } from "react";
import { usePayment } from "./core/hook";
import { useSelector } from "react-redux";
import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { HiOutlineBarsArrowDown } from "react-icons/hi2";
import { AiTwotoneEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import ModalComponent from "../modalCreateAndUpdate/modalCom";
import CreatePayment from "./components/CreatePayment";
import UpdatePayment from "./components/UpdatePayment";

const Payments = () => {
  const { getPayments, getDeletePayment } = usePayment();
  const { paymentList, loading } = useSelector((state) => state.payments);
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
  const deletePayment = (id) => {
    getDeletePayment(id);
  };
  return (
    <div className="row mt-5 mx-2">
      <div className="d-flex justify-content-between my-4">
        <h2 className="fw-bold">All Payments</h2>
        <Link
          className="me-3 btn btn-dark m-auto"
          onClick={() => handleShowCreatePayment()}
        >
          <FiPlus />
          Create Payment
        </Link>
      </div>
      <div className="table-responsive">
        <table className="table table-dark">
          <thead>
            <tr>
              <th className="d-flex align-items-center text-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <th>ID</th>
              <th scope="row">User</th>
              <th scope="row">Card</th>
              <th scope="row">Provider</th>
              <th>Card Numbers</th>
              <th></th>
              <th scope="row">Action</th>
            </tr>
          </thead>
          <tbody>
            {paymentList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </td>
                  <td>{item.id}</td>

                  <td>{item.user.name} </td>
                  <td>{item.paymentType.value}</td>
                  <td>{item.provider}</td>
                  <td>{item.accountNumber}</td>
                  <td></td>
                  <td className="">
                    {/* <div
                        className="dropdown dropstart"
                        style={{ height: "20px" }}
                      >
                        <HiOutlineBarsArrowDown
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        />
                        <div
                          className="dropdown-menu dropstart rounded-4  "
                          style={{
                            boxShadow:
                              "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          }}
                        >
                          <div className="d-flex flex-column">
                            <Link className=" btn btn-outline-light border-0 text-dark d-flex justify-content-start align-item-center">
                              <AiTwotoneEdit className="me-3" />
                              Edit
                            </Link>
                            <button
                              type="button"
                              onClick={() => deletePayment(item.id)}
                              className="btn btn-outline-light border-0 text-danger d-flex justify-content-start align-item-center"
                            >
                              <GoTrash className="me-3" />
                              Delete
                            </button>
                          </div>
                        </div>
                      </div> */}
                    <Link onClick={() => handleShowUpdatePayment(item.id)}>
                      <AiTwotoneEdit className="me-2 icon_hover text-light" />
                    </Link>
                    <Link onClick={() => deletePayment(item.id)}>
                      <GoTrash className="icon_hover text-light" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ModalComponent
          show={showCreatePayment}
          onHide={handleCloseCreatePayment}
          title="Create Payment"
          bodyModal={<CreatePayment />}
        />
        <ModalComponent
          show={showUpdatePayment}
          onHide={handleCloseUpdatePayment}
          title="Update Payment"
          bodyModal={<UpdatePayment id={catchPayment} />}
        />
      </div>
    </div>
  );
};

export default Payments;
