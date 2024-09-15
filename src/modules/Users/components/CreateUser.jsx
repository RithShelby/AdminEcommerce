import React, { useEffect } from "react";
import { useFormik } from "formik";
import { useUsers } from "../core/hook";
import { useRoles } from "../../Roles/core/hook";
import { useSelector } from "react-redux";
import Select from "react-select";
const CreateUser = () => {
  const { createUser } = useUsers();
  const { getRoles } = useRoles();
  const { listRole } = useSelector((state) => state.roles);
  useEffect(() => {
    getRoles();
  }, []);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      email: "",
      name: "",
      bio: "",
      address: "",
      phone: "",
      roleIds: [],
    },
    onSubmit: (values) => {
      let roleIds = [];
      if (Array.isArray(values.roleIds)) {
        roleIds = values.roleIds.map((id) => parseInt(id));
      } else if (typeof values.roleIds === "string") {
        roleIds = [parseInt(values.roleIds)];
      }
      createUser({ ...values, roleIds });
    },
  });
  console.log(listRole);
  const selectRole = listRole.map((role) => {
    return {
      value: role.id,
      label: role.name,
    };
  });
  return (
    <div className="row mx-5">
      <form action="" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12 my-2">
            <input
              type="text"
              {...formik.getFieldProps("username")}
              className="form-control py-2"
              placeholder="Username..."
              name="username"
            />
          </div>
          <div className="col-lg-12 my-2">
            <input
              type="password"
              {...formik.getFieldProps("password")}
              className="form-control py-2"
              placeholder="Password..."
              name="password"
            />
          </div>
          <div className="col-lg-12 my-2">
            <input
              type="password"
              {...formik.getFieldProps("confirmPassword")}
              className="form-control py-2"
              placeholder="ComfirmPassword..."
              name="confirmPassword"
            />
          </div>
          <div className="col-lg-12 my-2">
            <input
              type="email"
              {...formik.getFieldProps("email")}
              className="form-control py-2"
              placeholder="Email..."
              name="email"
            />
          </div>
          <div className="col-lg-12 my-2">
            <input
              type="text"
              {...formik.getFieldProps("name")}
              className="form-control py-2"
              placeholder="Name..."
              name="name"
            />
          </div>
          <div className="col-lg-12 my-2">
            <input
              type="text"
              {...formik.getFieldProps("bio")}
              className="form-control py-2"
              placeholder="Bio..."
              name="bio"
            />
          </div>
          <div className="col-lg-12 my-2">
            <input
              type="text"
              {...formik.getFieldProps("address")}
              className="form-control py-2"
              placeholder="Address..."
              name="address"
            />
          </div>
          <div className="col-lg-12 my-2">
            <input
              type="number"
              {...formik.getFieldProps("phone")}
              className="form-control py-2"
              placeholder="PhoneNumber..."
              name="phone"
            />
          </div>
          <div className="col-lg-12 my-2">
            <select
              value={
                formik.values.roleIds.length > 0 ? formik.values.roleIds[0] : ""
              }
              className="form-control py-2"
              onChange={formik.handleChange}
              name="roleIds"
            >
              <option value="">Select Role</option>
              {listRole.map((role) => {
                return (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                );
              })}
            </select>
            {/* <Select
              value={
                formik.values.roleIds.length > 0 ? formik.values.roleIds[0] : ""
              }
              onChange={(e) => {
                formik.setFieldValue("roleIds", e);
              }}
              options={selectRole}
            /> */}
          </div>
          <div className="col-lg-12 my-2">
            <button className="btn btn-success" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
