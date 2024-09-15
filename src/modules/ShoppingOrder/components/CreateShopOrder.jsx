import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { Button } from "antd";
import { useShoppingOrder } from "../core/hook";
import { useShippingMethod } from "../../ShippingMethod/core/hook";
import { useProductItem } from "../../ProductItem/core/hook";

const CreateShopOrder = () => {
  const { getShippingMethod } = useShippingMethod();
  const { getProductItem } = useProductItem();
  const { listShoppingMethod } = useSelector((state) => state.shippingMethod);
  const { productItemList } = useSelector((state) => state.productItem);
  const { createShoppingOrder } = useShoppingOrder();

  useEffect(() => {
    getShippingMethod();
    getProductItem();
  }, []);

  const formik = useFormik({
    initialValues: {
      shippingMethod: [],
      shippingAddress: "",
      orderlines: [
        {
          product_item_id: [],
          qty: null,
        },
      ],
    },
    onSubmit: (values) => {
      createShoppingOrder(values);
    },
  });
  return (
    <div className="row mx-5 my-3">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <select
              name="shippingMethod"
              className="form-control"
              value={formik.values.shippingMethod}
              onChange={formik.handleChange}
            >
              <option value="" label="Select Shipping Method" />
              {listShoppingMethod.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
            <input
              type="text"
              name="shippingAddress"
              className="form-control"
              value={formik.values.shippingAddress}
              onChange={formik.handleChange}
              placeholder="Enter Address..."
            />
          </div>
          {formik.values.orderlines.map((orderline, index) => (
            <div className="col-lg-12 col-md-12 col-sm-12 mb-3" key={index}>
              <select
                name={`orderlines[${index}].product_item_id`}
                className="form-control"
                value={formik.values.orderlines[index].product_item_id}
                onChange={formik.handleChange}
              >
                <option value="" label="Select Product Item" />
                {productItemList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.product.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name={`orderlines[${index}].qty`}
                className="form-control"
                value={formik.values.orderlines[index].qty}
                onChange={formik.handleChange}
                placeholder="Enter Quantity"
              />
            </div>
          ))}

          <div className="col-lg-12 d-flex mt-2">
            <button type="submit" className="m-auto w-50 btn btn-dark">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateShopOrder;
