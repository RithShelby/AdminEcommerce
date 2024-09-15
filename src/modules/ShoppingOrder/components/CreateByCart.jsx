import React, { useEffect } from "react";
import { useShippingMethod } from "../../ShippingMethod/core/hook";
import { useFormik } from "formik";
import { useShoppingOrder } from "../core/hook";
import { useSelector } from "react-redux";

const CreateByCart = () => {
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
        <button type="submit" className="btn btn-dark">
          Add Shopping Order
        </button>
      </form>
    </>
  );
};

export default CreateByCart;
