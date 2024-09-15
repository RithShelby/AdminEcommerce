import React from "react";
import { useParams } from "react-router-dom";
import { useRoles } from "../core/hook";
import { useSelector } from "react-redux";
import { useFormik } from "formik";

const UpdateRole = ({ id }) => {
  const { updateRole } = useRoles();
  const { listRole } = useSelector((state) => state.roles);

  // Find existing role based on id (parsed id)
  const existingRole = listRole.find((role) => role.id == id);

  const updateRoleFormik = useFormik({
    initialValues: {
      name: existingRole?.name || "",
      code: existingRole?.code || "",
    },
    onSubmit: (values) => {
      updateRole(id, values); // Pass id instead of id
    },
  });

  return (
    <div className="row mx-5">
      <div className="col-lg-12">
        <form onSubmit={updateRoleFormik.handleSubmit}>
          <input
            type="text"
            value={updateRoleFormik.values.name}
            name="name"
            onChange={updateRoleFormik.handleChange}
            className="form-control w-75 my-4 mx-auto py-3"
            placeholder="Enter name..."
          />
          <input
            type="text"
            value={updateRoleFormik.values.code}
            name="code"
            onChange={updateRoleFormik.handleChange}
            className="form-control w-75 mx-auto py-3"
            placeholder="Enter code..."
          />
          <div className="d-flex mt-4">
            <button type="submit" className="btn btn-success m-auto w-50">
              Update Role
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRole;
