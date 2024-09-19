import React, { useEffect } from "react";
import { useShippingMethod } from "../../ShippingMethod/core/hook";
import { useFormik } from "formik";
import { useShoppingOrder } from "../core/hook";
import { useSelector } from "react-redux";
import {useSweetAlert} from "../../SweetAlert";

const CreateByCart = ({handleClose}) => {
  const {SuccessAlert} = useSweetAlert();
  const { getShippingMethod } = useShippingMethod();
  const { listShoppingMethod } = useSelector((state) => state.shippingMethod);
  const { createShoppingOrderByCart } = useShoppingOrder();
  useEffect(() => {
    getShippingMethod();
  }, []);
  const formik = useFormik({
    initialValues: {
      shippingMethod: null,
      shippingAddress: "",
    },
    onSubmit: (values) => {
      createShoppingOrderByCart(values);
      handleClose();
    },
  });
  return (
    <>
      <form action="" onSubmit={formik.handleSubmit}>
        <select
            name="shippingMethod"
            className="form-select py-3"
            onChange={formik.handleChange}
            value={formik.values.shippingMethod}
        >
          <option value="">Shipping</option>
          {listShoppingMethod.map((item) => {
            return (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
            );
          })}
        </select>
        <input
            placeholder="Enter Address"
            type="text"
            className="form-control"
            name="shippingAddress"
            value={formik.values.shippingAddress}
            onChange={formik.handleChange}
        />
        <button className="btn btn-success" type="submit" onClick={() => {
          SuccessAlert(); // Show the success alert
          setTimeout(() => {
            handleClose(); // Close after the alert
          }, 1000); // Adjust the delay (1000ms = 1 second) as needed
        }}>
          Submit
        </button>
      </form>
    </>
  );
};

export default CreateByCart;
