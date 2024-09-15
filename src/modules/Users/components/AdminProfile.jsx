import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useUsers } from "../core/hook";
import AdminPic from "../../../assets/image/adminPro.png";
import { Link } from "react-router-dom";

const AdminProfile = () => {
  const { getAdminProfile } = useUsers();
  const { admin, loading } = useSelector((state) => state.users);
  console.log(admin);
  useEffect(() => {
    getAdminProfile();
  }, []);
  if (loading)
    return (
      <div className="d-flex  w-100 h-100">
        <div className="spinner-border" role="status" />
      </div>
    );
  return (
    <div className="row mx-5 mt-5  ">
      {admin && (
        <div className="col-lg-6 border border-0 rounded-5 bg-light d-flex flex-column py-4 m-auto ">
          {admin.avatar ? (
            <img
              className="w-50 m-auto rounded-pill"
              src={admin.avatar}
              alt=""
            />
          ) : (
            <img className="w-50 m-auto" src={AdminPic} alt="" />
          )}
          <div className="d-flex justify-content-between mx-5">
            <p className="fs-5 fw-bold">My Profile</p>
            <div className="d-flex flex-column">
              {" "}
              <p className="text-uppercase">{admin.username}</p>
              <p className="text-uppercase">{admin.bio}</p>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between mx-5">
            <p className="text-uppercase">{admin.email}</p>
            <p className="text-uppercase">{admin.phone}</p>
          </div>
          <hr />
          <div className="d-flex justify-content-between mx-5">
            <p className="text-uppercase">{admin.address}</p>
            <button className="btn btn-success rounded-5 ">Contact</button>
          </div>
          <hr />
          <div className="d-flex justify-content-center">
            {" "}
            <Link to="/">
              <button className="btn btn-warning me-4">Overview</button>
            </Link>
            <Link to="/users">
              <button className="btn btn-primary">Users</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
