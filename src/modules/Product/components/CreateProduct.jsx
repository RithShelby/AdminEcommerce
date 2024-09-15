import React, { useEffect } from "react";
import { useProducts } from "../core/hook";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { useCatagories } from "../../Categories/core/hook";
import UploadImage from "./UploadImage";
import "../../../assets/css/App.css";
import Select from "react-select";

const CreateProduct = () => {
  const { getCreateProducts, uploadImage } = useProducts();
  const { getCategories } = useCatagories();
  const { listProduct, categoryOption } = useSelector(
    (state) => state.products
  );
  const image = useSelector((state) => state.products.uploadImg);
  // console.log(image);
  useEffect(() => {
    getCategories();
  }, []);
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      image: null,
      category: null,
    },

    onSubmit: (values) => {
      console.log(values);

      getCreateProducts({
        ...values,
        image,
        categoryId: values.category.value,
        category: undefined,
      });
    },
  });
  // console.log(image);
  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      uploadImage(e.target.files[0]);
    }
  };
  console.log(categoryOption);
  const selectCategory = listProduct.map((category) => {
    return {
      value: category.category,
      label: category.category.name,
    };
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="">
          <input
            {...formik.getFieldProps("name")}
            type="text"
            name="name"
            className="form-control w-75 my-4 m-auto py-3"
            placeholder="Name"
          />
          <input
            type="text"
            {...formik.getFieldProps("description")}
            name="description"
            className="form-control w-75 my-4 m-auto py-3"
            placeholder="Description"
          />
          <Select
            value={formik.values.category}
            onChange={(e) => {
              formik.setFieldValue("category", e);
            }}
            className=" w-75 my-4 m-auto"
            options={categoryOption}
          />
          <input
            type="file"
            name="image"
            className="form-control w-75 my-4 m-auto py-3"
            onChange={onFileChange}
          />
          <div className=" d-flex justify-content-center flex-column align-items-center">
            {/* <input
                    type="file"
                    value={createFormik.values.image || ""}
                    name="image"
                    className="input-field"
                    onChange={(e) => {
                      createFormik.handleChange(e);
                      onFileChange(e);
                    }}
                  /> */}
            <UploadImage />
          </div>
        </div>
        <div className="col-lg-12 d-flex mt-2">
          <button type="submit" className="btn btn-success m-auto w-50">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default CreateProduct;
