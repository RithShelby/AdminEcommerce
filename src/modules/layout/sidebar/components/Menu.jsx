import { Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import newLogo from "../../../../assets/image//newLogo.png";
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
  const menuActive = (path)=>{
    if (location.pathname === path) return "text-dark bg-light";
  }
  return (
    <Menu style={{backgroundColor : "#222831"}}
      onClick={onClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      className="d-flex flex-column"
    >
      <img className="w-50 m-auto" src={newLogo} alt="" />
      {items.map(         (item, index) => {
        const { key, title, icon, path, childrenMenu, permission } = item;
        if (childrenMenu) {
          return (
            <SubMenu key={key} icon={icon} title={title}>
              {childrenMenu.map((child) => (
                <Menu.Item className={`nav-link ${menuActive(child.path)}`}>
                  <Link className = {"nav-link"}
                    to={child.path}>
                    {child.title}
                  </Link>
                </Menu.Item>
              ))}
            </SubMenu>
          );
        }
        return (
          <Menu.Item icon={icon} className={`nav-link ${menuActive(path)}`} >
            <Link className={"nav-link"} to={path}>
              {title}
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MenuSide;
