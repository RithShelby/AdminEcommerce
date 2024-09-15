import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useUsers } from "../core/hook";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRoles } from "../../Roles/core/hook";
import Select from "react-select";
const UpdateUser = ({ uuid }) => {
  // const { uuid } = useParams();
  const { updateUser } = useUsers();
  const { getRoles } = useRoles();
  const { list } = useSelector((state) => state.users);
  const { listRole } = useSelector((state) => state.roles);
  const existingUser = list.find((f) => f.uuid == uuid);

  useEffect(() => {
    getRoles();
  }, []);
  const updateFormik = useFormik({
    initialValues: {
      username: existingUser?.username,
      password: existingUser?.password,
      confirmPassword: existingUser?.confirmPassword,
      email: existingUser?.email,
      avatar: null,
      name: existingUser?.name,
      bio: existingUser?.bio,
      address: existingUser?.address,
      phone: existingUser?.phone,
      roleId: existingUser?.roleEntity.id,
    },
    onSubmit: (values) => {
      let roleId = [];
      if (Array.isArray(values.roleId)) {
        roleId = values.roleId.map((id) => parseInt(id));
      } else if (typeof values.roleId === "string") {
        roleId = [parseInt(values.roleId)];
      }
      updateUser(uuid, { ...values, roleId });
    },
  });

  return (
    <div className="row mx-5 mt-5">
      <form action="" onSubmit={updateFormik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 my-2">
            <input
              type="text"
              {...updateFormik.getFieldProps("username")}
              className="form-control py-2"
              placeholder="Username..."
              name="username"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 my-2">
            <input
              type="password"
              {...updateFormik.getFieldProps("password")}
              className="form-control py-2"
              placeholder="Password..."
              name="password"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 my-2">
            <input
              type="password"
              {...updateFormik.getFieldProps("confirmPassword")}
              className="form-control py-2"
              placeholder="ComfirmPassword..."
              name="confirmPassword"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 my-2">
            <input
              type="email"
              {...updateFormik.getFieldProps("email")}
              className="form-control py-2"
              placeholder="Email..."
              name="email"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 my-2">
            <input
              type="text"
              {...updateFormik.getFieldProps("name")}
              className="form-control py-2"
              placeholder="Name..."
              name="name"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 my-2">
            <input
              type="text"
              {...updateFormik.getFieldProps("bio")}
              className="form-control py-2"
              placeholder="Bio..."
              name="bio"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 my-2">
            <input
              type="text"
              {...updateFormik.getFieldProps("address")}
              className="form-control py-2"
              placeholder="Address..."
              name="address"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 my-2">
            <input
              type="number"
              {...updateFormik.getFieldProps("phone")}
              className="form-control py-2"
              placeholder="PhoneNumber..."
              name="phone"
            />
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 my-2">
            <select
              value={updateFormik.values.roleId || ""}
              name="roleId"
              className="form-control py-2"
              onChange={updateFormik.handleChange}
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
              value={updateFormik.values.roleId || ""}
              onChange={(e) => {
                updateFormik.setFieldValue("roleId", e);
              }}
              options={selectRole}
            /> */}
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 my-2">
            <button className="btn btn-success">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
