import React, { useEffect } from "react";
import { useProductItem } from "../core/hook";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import { useVariOption } from "../../VariationOption/core/hook";
import { useFileUpload } from "../../file/core/hook";
import { useCatagories } from "../../Categories/core/hook";
import Select from "react-select";
import {useSweetAlert} from "../../SweetAlert";
const UpProItem = ({ id,handleClose }) => {
  const { getVariationOption } = useVariOption();
  const {SuccessAlert} = useSweetAlert();
  const { uploadSingleFile } = useFileUpload();
  const { getCategories } = useCatagories();
  const { listCategories } = useSelector((state) => state.categories);
  const { listVariationOptions } = useSelector(
    (state) => state.variationOpions
  );
  const selectCategory = listCategories.map((category) => {
    return {
      value: category.category.id,
      label: category.category.name,
    };
  });
  const selectVariation = listVariationOptions.map((optionItem) => ({
    value: optionItem.id,
    label: optionItem.value,
  }));
  const { uploadSingle } = useSelector((state) => state.files);
  const { updateProductItem } = useProductItem();
  const { productItemList } = useSelector((state) => state.productItem);
  const productItemId = productItemList.find((f) => f.id === id);
  console.log(productItemId);
  useEffect(() => {
    getCategories();
    getVariationOption();
  }, []);
  const formik = useFormik({
    initialValues: {
      productId: productItemId?.id || "",
      quantity: productItemId?.quantity || "",
      image: productItemId?.image || "",
      price: productItemId?.price || "",
      variationOptions: Array.from({ length: 3 }, () => ({
        variationOptionId: productItemId?.variationOptionId || "",
        status: true,
      })),
    },

    onSubmit: (values) => {
      updateProductItem(id, { ...values, image: uploadSingle || null });
    },
  });
  // console.log(updateProductItemFormik.values.image);
  const onFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      uploadSingleFile(e.target.files[0]);
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row mx-5">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <Select
              className="w-100 m-auto"
              options={selectCategory}
              name="productId"
              value={listCategories.find(
                  (option) => option.value === formik.values.productId
              )}
              onChange={(selectedOption) =>
                  formik.setFieldValue(
                      "productId",
                      selectedOption ? selectedOption.value : null
                  )
              }
              placeholder="Select Product ID"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <input
              name="quantity"
              {...formik.getFieldProps("quantity")}
              className="form-control py-3 bg-light my-3 "
              type="number"
              placeholder="Product Quantity"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <input
              name="price"
              {...formik.getFieldProps("price")}
              className="form-control py-3 bg-light"
              type="number"
              placeholder="Product Price"
          />
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <input
              type="file"
              name="image"
              className="form-control py-3 my-3"
              onChange={(e) => {
                formik.handleChange(e);
                onFileChange(e);
              }}
          />
        </div>
        {formik.values.variationOptions.map((optionItem, index) => (
            <Select
                key={index}
                className="w-100 m-auto my-2"
                options={selectVariation}
                name={`variationOptions[${index}].variationOptionId`}
                value={selectVariation.find(
                    (option) => option.value === optionItem.variationOptionId
                )}
                onChange={(selectedOption) =>
                    formik.setFieldValue(
                        `variationOptions[${index}].variationOptionId`,
                        selectedOption ? selectedOption.value : null
                    )
                }
                placeholder="Select Variation Option"
            />
        ))}

        <button className="btn btn-success" type="submit" onClick={() => {
          SuccessAlert(); // Show the success alert
          setTimeout(() => {
            handleClose(); // Close after the alert
          }, 1000); // Adjust the delay (1000ms = 1 second) as needed
        }}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default UpProItem;
