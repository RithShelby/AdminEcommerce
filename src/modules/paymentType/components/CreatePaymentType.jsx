import React from "react";
import { usePaymentType } from "../core/hook";
import { useFormik } from "formik";
import {useSweetAlert} from "../../SweetAlert";

const CreatePaymentType = ({ handleClose }) => {
  const { getCreatePaymentType } = usePaymentType();
const {SuccessAlert} = useSweetAlert();
  const createFormik = useFormik({
    initialValues: {
      value: "",
    },

    onSubmit: (values) => {
      getCreatePaymentType(values);
      handleClose();
    },
  });
  return (
    <div className="row mx-5 my-3  ">
      <form onSubmit={createFormik.handleSubmit}>
        <div className="col-lg-12">
          <input
              type="text"
              value={createFormik.values.value}
              name="value"
              className="form-control w-100 mb-4  py-3"
              onChange={createFormik.handleChange}
              placeholder="Card name"
              required
          />
          <button className="btn btn-success" type="submit" onClick={() => {
            SuccessAlert({title: "Create PaymentType Success!", text: "Thank You!"}); // Show the success alert
            setTimeout(() => {
              handleClose(); // Close after the alert
            }, 1000); // Adjust the delay (1000ms = 1 second) as needed
          }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePaymentType;
