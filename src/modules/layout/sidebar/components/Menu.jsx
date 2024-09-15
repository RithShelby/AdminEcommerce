import { Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import LogoKilo from "../../../../assets/image/KiloIT-Logo-Final-01.png";
import { items } from "../../../constants/SidebarData";
import {
  HasPermission,
  RouteHasPermission,
} from "../../../components/HasPermission";
const { SubMenu } = Menu;

const MenuSide = () => {
  const location = useLocation();
  const onClick = (e) => {
    console.log("click ", e);
  };
  const classActive = (path) => {
    if (location.pathname === path) return "text-decoration-underline";
    return "";
  };
  return (
    <Menu
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      className="d-flex flex-column"
    >
      <img className="w-50 m-auto" src={LogoKilo} alt="" />
      {items.map((item, index) => {
        const { key, title, icon, path, childrenMenu, permission } = item;
        if (childrenMenu) {
          return (
            <SubMenu key={key} icon={icon} title={title}>
              {childrenMenu.map((child) => (
                <Menu.Item>
                  <Link
                    className={`nav-link ${classActive(child.path)}`}
                    to={child.path}
                  >
                    {child.title}
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          );
        }
        return (
          <Menu.Item icon={icon}>
            <Link className={`nav-link ${classActive(path)}`} to={path}>
              {title}
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MenuSide;
