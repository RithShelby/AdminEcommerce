import React from "react";
import { useRoles } from "../core/hook";
import { useFormik } from "formik";

const CreateRole = () => {
  const { createRoles } = useRoles();
  const createFormik = useFormik({
    initialValues: {
      name: "",
      code: "",
    },
    onSubmit: (values) => {
      createRoles(values);
    },
  });
  return (
    <div className="row mx-5">
      <form onSubmit={createFormik.handleSubmit}>
        <div className="row">
          <input
            type="text"
            value={createFormik.values.name}
            name="name"
            onChange={createFormik.handleChange}
            className="form-control w-75 my-4 m-auto py-3"
            placeholder="Enter name..."
          />
          <input
            type="text"
            value={createFormik.values.code}
            name="code"
            className="form-control w-75 m-auto py-3"
            onChange={createFormik.handleChange}
            placeholder="Enter code..."
          />
          <div className="col-lg-12 d-flex mt-2">
            <button className="btn btn-success m-auto w-50">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateRole;
