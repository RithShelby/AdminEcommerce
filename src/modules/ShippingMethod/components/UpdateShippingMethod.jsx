import { Formik, useFormik } from "formik";
import React from "react";
import { useParams } from "react-router-dom";
import { useShippingMethod } from "../core/hook";
import { useSelector } from "react-redux";
import Select from "react-select";
const UpdateShippingMethod = ({ id }) => {
  // const {id} = useParams();
  const { updateShippingMethod } = useShippingMethod();
  const { listShoppingMethod } = useSelector((state) => state.shippingMethod);
  const shippingId = listShoppingMethod.find((f) => f.id == id);
  // console.log(shippingId);
  const updateShippingFormik = useFormik({
    initialValues: {
      name: shippingId
        ? { value: shippingId.id, label: shippingId.name }
        : null,
      price: shippingId?.price || "",
    },
    onSubmit: (values) => {
      updateShippingMethod(id, { ...values, name: values.name.label });
    },
  });
  const select = listShoppingMethod.map((m) => {
    return {
      value: m.id,
      label: m.name,
    };
  });
  return (
    <div className="row mx-4">
      <form onSubmit={updateShippingFormik.handleSubmit}>
        <div className="col-md-12">
          <Select
            className="mb-3"
            name="name"
            value={updateShippingFormik.values.name}
            onChange={(e) => {
              updateShippingFormik.setFieldValue("name", e);
            }}
            options={select}
          />
        </div>
        <div className="col-md-12">
          <input
            name="price"
            value={updateShippingFormik.values.price}
            className="form-control bg-light py-2"
            type="number"
            placeholder="Shipping Method Price"
            onChange={updateShippingFormik.handleChange}
          />
        </div>
        <button type="submit" className="btn bg-success-subtle w-100 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateShippingMethod;
