import React, { useEffect } from "react";
import { useShippingMethod } from "../core/hook";
import { useFormik } from "formik";
import * as Yup from "yup";
import {useSweetAlert} from "../../SweetAlert"; // Import Yup for validation

const CreateShippingMethod = ({ handleClose }) => {
  const { createdShippingMethod, getShippingMethod } = useShippingMethod(); // Destructure once
const {SuccessAlert} = useSweetAlert();
  useEffect(() => {
    getShippingMethod();
  }, []);

  const createShipFormik = useFormik({
    initialValues: {
      name: "",
      price: "", // Keep as string to manage initial input state
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      price: Yup.number()
        .required("Price is required")
        .positive("Price must be a positive number"),
    }),
    onSubmit: (values) => {
      createdShippingMethod(values);
      handleClose(false);
    },
  });

  return (
    <div className="row ">
      <form onSubmit={createShipFormik.handleSubmit}>
        <input
            type="text"
            className={`form-control my-4 py-3 w-100 ${
                createShipFormik.touched.name && createShipFormik.errors.name
                    ? "is-invalid"
                    : ""
            }`}
            placeholder="Enter Name"
            name="name"
            value={createShipFormik.values.name}
            onChange={createShipFormik.handleChange}
            onBlur={createShipFormik.handleBlur}
        />
        {createShipFormik.touched.name && createShipFormik.errors.name ? (
            <div className="invalid-feedback">{createShipFormik.errors.name}</div>
        ) : null}

        <input
            type="number"
            className={`form-control mb-4 py-3 w-100 ${
                createShipFormik.touched.price && createShipFormik.errors.price
                    ? "is-invalid"
                    : ""
            }`}
            placeholder="Enter Price"
            name="price"
            value={createShipFormik.values.price}
            onChange={createShipFormik.handleChange}
            onBlur={createShipFormik.handleBlur}
        />
        {createShipFormik.touched.price && createShipFormik.errors.price ? (
            <div className="invalid-feedback">
              {createShipFormik.errors.price}
            </div>
        ) : null}

        <button className="btn btn-success" type="submit" onClick={() => {
          SuccessAlert({title: "Create Shipping Success!", text: "Thank You!"}); // Show the success alert
          setTimeout(() => {
            handleClose(); // Close after the alert
          }, 1000); // Adjust the delay (1000ms = 1 second) as needed
        }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateShippingMethod;
