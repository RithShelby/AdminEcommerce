import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Headerr from "../header/Header";
import MenuSide from "./components/Menu";
import Sider from "antd/es/layout/Sider";
import MobileNav from "./components/mobileNav";
const LayoutApp = ({ isDarkMode, setIsDarkMode }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="container-fluid m-0 p-0 ">
      <Layout>
        <Sider
          style={{backgroundColor : "#222831"}}
          trigger={null}
          collapsible
          collapsed={collapsed}
          position="fixed"
        >
          <MenuSide />
        </Sider>
        <Layout className={isDarkMode ? "dark-mode" : "light-mode"}>
          <Headerr
            collapsed={collapsed}
            setCollapsed={setCollapsed}
            isDarkMode={isDarkMode}
            toggleMode={() => setIsDarkMode(!isDarkMode)}
          />
          <Outlet />
          <MobileNav />
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutApp;
