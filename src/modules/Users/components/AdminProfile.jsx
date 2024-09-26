import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useUsers } from "../core/hook";
import AdminPic from "../../../assets/image/avatar.jpg";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

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
          <img className="w-25 m-auto rounded-circle" src={AdminPic} alt=""  />
          <div className="text-center d-flex flex-column">
            <p className="text-uppercase fs-4 fw-bold">{admin.username}</p>
            <p className="text-uppercase fs-6 text-secondary fw-bold">
              {admin.bio}
            </p>
          </div>
          <div className="d-flex border rounded-3 justify-content-evenly w-75 m-auto  py-3 text-center align-items-center">
            <div className="box1 d-flex border-end pe-3">
              <p className="fs-5 m-auto">270 Posts</p>
            </div>
            <div className="box2 d-flex">
              <p className="fs-5 m-auto">1K Followers</p>
            </div>
            <div className="box3 d-flex border-start ps-3">
              <p className="fs-5 m-auto">1K Following</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="fs-5 text-secondary">Follow me on</p>
            <div className="d-flex justify-content-center">
              <Link>
                <FaFacebookF className="fs-4 text-secondary" />
              </Link>
              <Link className="mx-3">
                <FaLinkedinIn className="fs-4 text-secondary" />
              </Link>
              <Link>
                <FaGithub className="fs-4 text-secondary" />
              </Link>
            </div>
          </div>
          {/*<hr />*/}
          {/*<div className="d-flex justify-content-between mx-5">*/}
          {/*  <p className="text-uppercase">{admin.email}</p>*/}
          {/*  <p className="text-uppercase">{admin.phone}</p>*/}
          {/*</div>*/}
          {/*<hr />*/}
          {/*<div className="d-flex justify-content-between mx-5">*/}
          {/*  <p className="text-uppercase">{admin.address}</p>*/}
          {/*  <button className="btn btn-success rounded-5 ">Contact</button>*/}
          {/*</div>*/}
          {/*<hr />*/}
          {/*<div className="d-flex justify-content-center">*/}
          {/*  {" "}*/}
          {/*  <Link to="/">*/}
          {/*    <button className="btn btn-warning me-4">Overview</button>*/}
          {/*  </Link>*/}
          {/*  <Link to="/users">*/}
          {/*    <button className="btn btn-primary">Users</button>*/}
          {/*  </Link>*/}
          {/*</div>*/}
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
