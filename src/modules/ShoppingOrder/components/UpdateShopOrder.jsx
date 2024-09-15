import { useForm } from "antd/es/form/Form";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useShoppingOrder } from "../core/hook";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useShippingMethod } from "../../ShippingMethod/core/hook";

const UpdateShopOrder = ({ id }) => {
  // const { id } = useParams();
  const { listShoppingMethod } = useSelector((state) => state.shippingMethod);
  const { listShoppingOrder } = useSelector((state) => state.shoppingOrders);
  const { updateShoppingOrder } = useShoppingOrder();
  const { getShippingMethod } = useShippingMethod();
  const shopOrderbyId = listShoppingOrder.find((f) => f.id === id);
  const formik = useFormik({
    initialValues: {
      shippingMethod: shopOrderbyId?.shippingMethod || null,
      shippingAddress: shopOrderbyId?.shippingAddress || "",
    },
    onSubmit: (values) => {
      updateShoppingOrder(id, values);
    },
  });
  useEffect(() => {
    getShippingMethod();
  }, []);
  return (
    <div className="row mx-5 my-3  ">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <select
              value={formik.values.shippingMethod}
              name="shippingMethod"
              onChange={formik.handleChange}
              className="form-select py-3"
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
          </div>

          <div className="col-lg-12">
            <input
              type="text"
              value={formik.values.shippingAddress || ""}
              name="shippingAddress"
              className="form-select py-3"
              onChange={formik.handleChange}
              placeholder="Enter Address..."
            />
          </div>
        </div>

        <div className="col-lg-12 d-flex mt-2">
          <button className="btn btn-success m-auto w-50">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateShopOrder;
