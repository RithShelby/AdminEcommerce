import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LuUsers } from "react-icons/lu";
import { AiOutlineNotification } from "react-icons/ai";
import { SlLogout } from "react-icons/sl";
import { GrUserAdmin } from "react-icons/gr";
import CurrentDate from "../currentDate/date";
import { Button, message } from "antd";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { IoIosNotificationsOutline } from "react-icons/io";

const Headerr = ({ collapsed, setCollapsed, isDarkMode, toggleMode }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "Null Notification, Enjoy your works ❤️",
    });
  };
  return (
    <div className="d-flex justify-content-between mt-3">
      <div className="d-flex align-items-center">
        {" "}
        <Button
          className="d-none d-lg-block"
          type="text"
          icon={collapsed ? <HiOutlineBars3BottomRight /> : <FaBars />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <CurrentDate />
      </div>
      <div className="d-flex mx-3 align-items-center">
        <label className="switch border border-3 rounded-5 ">
          <input type="checkbox" onClick={toggleMode} />
          <span className="slider"></span>
        </label>
        <div>
          {contextHolder}
          <IoIosNotificationsOutline className="fs-3 mx-2" onClick={success} />
        </div>
        <div className="dropdown-center" style={{ cursor: "pointer" }}>
          <RiAdminLine
            className="fs-4"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          />
          <ul className="dropdown-menu">
            <p className="fw-bold ms-3">Setting</p>
            <hr />
            <li>
              <Link
                className="dropdown-item bg-white text-dark"
                to="/admin-profile"
              >
                <GrUserAdmin className="fs-4 me-2" />
                Admin Profile
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item bg-white text-dark"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                <SlLogout className="fs-4 me-2" />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headerr;
