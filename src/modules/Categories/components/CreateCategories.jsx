import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useCatagories } from "../core/hook";
import { useSelector } from "react-redux";
import * as Yup from "yup";
import { useProductItem } from "../../ProductItem/core/hook";
import Select from "react-select";
// Define the validation schema using Yup
const SchemaValidation = Yup.object().shape({
  name: Yup.string().required("Please input category name"),
  description: Yup.string().required("Please input description"),
});
const CreateCategories = ({ handleClose }) => {
  const { createCategory, getCategories } = useCatagories();
  const { getProductItem } = useProductItem();
  const { productItemList } = useSelector((state) => state.productItem);
  const { listCategories } = useSelector((state) => state.categories);
  useEffect(() => {
    getProductItem();
    getCategories();
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      parentId: null,
    },
    validationSchema: SchemaValidation,
    onSubmit: (values) => {
      createCategory(values);
      handleClose();
    },
  });
  // const select = listCategories.map((item) => {
  //   return {
  //     key: item.category.id,
  //     value: item.category.id,
  //     label: item.category.name,
  //   };
  // });
  return (
    <div className="row mx-5">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <input
              type="text"
              value={formik.values.name}
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`form-control w-100 my-4 m-auto py-3 ${
                formik.touched.name && formik.errors.name ? "is-invalid" : ""
              }`}
              placeholder="Category name..."
            />

            <input
              type="text"
              value={formik.values.description}
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`form-control w-100 my-4 m-auto py-3 ${
                formik.touched.description && formik.errors.description
                  ? "is-invalid"
                  : ""
              }`}
              placeholder="Description..."
            />
            {/* <input
              type="text"
              value={formik.values.parentId}
              onChange={formik.handleChange}
              name="parentId"
              className="form-control"
              placeholder="Enter Category Type"
            /> */}
            {/* <Select
              value={formik.values.parentId}
              onChange={(e) => {
                formik.setFieldValue("parentId", e);
              }}
              name="parentId"
              options={select}
            /> */}
            <select
              name="parentId"
              className="form-select py-3 w-75 m-auto"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.parentId}
            >
              <option value="">Select Category ID</option>
              {listCategories.map((item) => (
                <option key={item.category.id} value={item.category.id}>
                  {item.category.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-lg-12 d-flex mt-2">
            <button type="submit" className="btn btn-success m-auto w-50">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateCategories;
