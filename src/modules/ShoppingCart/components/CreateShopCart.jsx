import React, { useEffect, useState } from "react";
import { useShopCart } from "../core/hook";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useProductItem } from "../../ProductItem/core/hook";

const CreateShopCart = () => {
  const { createShopCart } = useShopCart();
  const { productItemList } = useSelector((state) => state.productItem);
  const { getProductItem } = useProductItem();
  useEffect(() => {
    getProductItem();
  }, []);
  const formik = useFormik({
    initialValues: {
      product_item_id: null,
      qty: null,
    },
    onSubmit: (values) => {
      createShopCart(values);
    },
  });
  return (
    <div className="row">
      <form className="" onSubmit={formik.handleSubmit}>
        <select
          name="product_item_id"
          className="form-select py-3"
          onChange={formik.handleChange}
          value={formik.values.product_item_id}
        >
          <option>Select Product Item ID</option>
          {productItemList.map((item) => (
            <option key={item.id} value={item.id}>
              {item.product.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          className="form-control my-4 py-3"
          placeholder="Quantity"
          name="qty"
          value={formik.values.qty || ""} // Ensure value is never null
          onChange={formik.handleChange}
        />
        <button type="submit" className="btn btn-success w-50 m-auto py-3">
          Create ShopCart
        </button>
      </form>
    </div>
  );
};

export default CreateShopCart;
