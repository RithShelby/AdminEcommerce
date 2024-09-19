import React, { useEffect } from "react";
import { useProducts } from "../core/hook";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useCatagories } from "../../Categories/core/hook";
import Select from "react-select";
import {useSweetAlert} from "../../SweetAlert";

const UpdateProduct = ({ uuid,handleClose }) => {
  const {SuccessAlert} = useSweetAlert();
  const { updateProductByUuid } = useProducts();
  const { getCategories } = useCatagories();
  const { listProduct, categoryOption } = useSelector(
    (state) => state.products
  );
  const pdUuid = listProduct.find((p) => p.uuid === uuid);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const formik = useFormik({
    initialValues: {
      name: pdUuid?.name || "",
      description: pdUuid?.description || "",
      categoryId:
        categoryOption.find(
          (option) => option.value === pdUuid?.category?.id
        ) || null,
    },
    onSubmit: (values) => {
      updateProductByUuid(uuid, {
        ...values,
        categoryId: values.categoryId.value,
      });
      handleClose();
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="border-0 rounded-5 bg-light p-4 w-100"
      style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
    >
      <input
        type="text"
        {...formik.getFieldProps("name")}
        name="name"
        className="form-control w-100 my-2"
      />
      <input
        type="text"
        {...formik.getFieldProps("description")}
        name="description"
        className="form-control w-100 my-2"
      />
      <Select
        value={formik.values.categoryId}
        onChange={(e) => {
          formik.setFieldValue("categoryId", e);
        }}
        className="w-75 my-3 m-auto"
        options={categoryOption}
      />
      <div className="d-flex mt-4">
        <button type="submit" className="btn btn-success m-auto w-50" onClick={() => {
          SuccessAlert(); // Show the success alert
          setTimeout(() => {
            handleClose(); // Close after the alert
          }, 1000); // Adjust the delay (1000ms = 1 second) as needed
        }}>
          Update Product
        </button>
      </div>
    </form>
  );
};

export default UpdateProduct;
