import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useCatagories } from "../core/hook";
import { useSelector } from "react-redux";
import { useProductItem } from "../../ProductItem/core/hook";
// import Select from "react-select";
const UpdateCategories = ({ uuid, close }) => {
  const { updateCategories, getCategories, showCategoryById } = useCatagories();
  const { getProductItem } = useProductItem();
  const { listCategories } = useSelector((state) => state.categories);

  const { productItemList } = useSelector((state) => state.productItem);
  const categoriesByUuid = listCategories.find((f) => f.uuid === uuid);

  // console.log(categoriesByUuid);
  console.log(
    productItemList,
    "--------------------------------------------------------"
  );
  // const select = productItemList.map((cate) => {
  //   return {
  //     value: cate.product.category.id,
  //     label: cate.product.category.name,
  //   };
  // });

  useEffect(() => {
    getCategories();
    showCategoryById(uuid);
    getProductItem();
  }, []);

  const formik = useFormik({
    initialValues: {
      parentId: categoriesByUuid?.parentId,
    },
    onSubmit: (values) => {
      updateCategories(uuid, values);
      console.log(values);
      close(false);
    },
  });

  return (
    <div>
      <div className="row mx-5 mt-3">
        <div className="col-lg-12">
          <form onSubmit={formik.handleSubmit}>
            {/* <Select
              value={formik.values.parentId}
              formik={formik}
              options={select}
              onChange={(e) => {
                formik.setFieldValue("parentId", e);
              }}
            /> */}
            {/* <input
              type="number"
              value={formik.values.parentId}
              name="parentId"
              onChange={formik.handleChange}
              className="form-control w-75 my-4 mx-auto py-3"
              placeholder="Enter parentId..."
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
            <div className="d-flex mt-4">
              <button type="submit" className="btn btn-success m-auto w-50">
                Update Categories
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCategories;
