import { Link } from "react-router-dom";
import { Menu } from "antd";
import React from "react";
import { FaUserCheck } from "react-icons/fa";

import { RiArrowDropDownLine } from "react-icons/ri";
import {
  AiFillAppstore,
  AiOutlineUser,
  AiTwotoneCreditCard,
  AiTwotoneSkin,
} from "react-icons/ai";

import { LiaShippingFastSolid } from "react-icons/lia";
import { Dropdown, Space } from "antd";
import {
  itemsPayment,
  itemsProduct,
  itemsShipping,
} from "../../../constants/MobileData";
const MobileNav = () => {
  return (
    <div className="d-flex d-lg-none fixed-bottom p-0 m-0">
      <Menu
        className="mt-5 d-flex justify-content-between align-items-center w-100 py-3"
        style={{ backgroundColor: " #00111c" }}
        theme="dark"
        defaultSelectedKeys={["1"]}
      >
        <li className="mobile-hover" key="1">
          <Link to="/" className="nav-link fw-bold fs-6">
            <AiFillAppstore className="fs-1 icon-mobile" />
          </Link>
        </li>
        <li className="  mobile-hover" key="2">
          <Link to="/users" className="nav-link fw-bold fs-6">
            <AiOutlineUser className="fs-1 icon-mobile" />
          </Link>
        </li>
        <li className="  mobile-hover" key="3">
          <Link to="/roles" className="nav-link fw-bold fs-6">
            <FaUserCheck className="fs-1 icon-mobile" />
          </Link>
        </li>
        <li className="  mobile-hover" key="4">
          <Dropdown overlay={<Menu items={itemsProduct} />} placement="bottom">
            <Link className="nav-link" onClick={(e) => e.preventDefault()}>
              <Space className="fw-bold fs-6">
                <AiTwotoneSkin className="fs-1 icon-mobile" />
                <RiArrowDropDownLine />
              </Space>
            </Link>
          </Dropdown>
        </li>
        <li className="  mobile-hover" key="6">
          <Dropdown overlay={<Menu items={itemsShipping} />} placement="bottom">
            <Link className="nav-link" onClick={(e) => e.preventDefault()}>
              <Space className="fw-bold fs-6">
                <LiaShippingFastSolid className="fs-1 icon-mobile" />
                <RiArrowDropDownLine />
              </Space>
            </Link>
          </Dropdown>
        </li>
        <li className="  mobile-hover" key="5">
          <Dropdown overlay={<Menu items={itemsPayment} />} placement="bottom">
            <Link className="nav-link" onClick={(e) => e.preventDefault()}>
              <Space className="fw-bold fs-6">
                <AiTwotoneCreditCard className="fs-1 icon-mobile" />
                <RiArrowDropDownLine />
              </Space>
            </Link>
          </Dropdown>
        </li>
      </Menu>
    </div>
  );
};

export default MobileNav;
