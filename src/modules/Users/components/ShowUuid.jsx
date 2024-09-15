import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import profileUser from "../../../assets/image/userProfile.png";
import { useUsers } from "../core/hook";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiTwotoneEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
// import Select from "react-select"
const ShowUuid = () => {
  const { uuid } = useParams();
  const { getUserByUuid } = useUsers();
  const user = useSelector((state) =>
    state.users.list.find((item) => item.uuid === uuid)
  );
  useEffect(() => {
    getUserByUuid(uuid); // Pass the uuid parameter to getUserByUuid
  }, []); // Add uuid and getUserByUuid to the dependency array
  return (
    <div
      className="card mt-5  m-auto rounded-5 border-0 "
      style={{
        width: "40%",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      {/* <p>{uuid}</p> */}
      {user.avatar ? (
        <img
          src={user.avatar}
          className="card-img-top m-auto w-50"
          alt="Profile"
        />
      ) : (
        <img
          src={profileUser}
          alt="profile"
          className="card-img-top m-auto w-50"
        />
      )}

      <div className="card-body">
        <p className="text-start fw-bold fs-4">My Profile</p>{" "}
        <div className="d-flex justify-content-evenly">
          {" "}
          <p className="text-center">
            Name : {user ? user.name : "Loading..."}
          </p>
          <p>Email : {user ? user.email : "Loading..."}</p>
        </div>
        <hr />
        <div className="d-flex justify-content-evenly">
          {" "}
          <p className="text-center">
            Phone : {user ? user.phone : "Loading..."}
          </p>
          <p>Address : {user ? user.address : "Loading..."}</p>
        </div>
        <div className="d-flex justify-content-center">
          <Link>
            <button className="btn btn-warning fw-bold rounded-4">
              {" "}
              <AiTwotoneEdit className="me-3 fs-4" />
              Edit User
            </button>
          </Link>
          <hr className="mx-2" />
          <Link>
            <button className="btn btn-danger fw-bold rounded-4">
              <GoTrash className="me-3 fs-4" />
              Delete User
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowUuid;
