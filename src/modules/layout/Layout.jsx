import React, { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import MenuSide from "./sidebar/components/Menu";
import MobileNav from "./sidebar/components/mobileNav";
import Header from "./header/Header";

const { Sider, Content } = Layout;

const LayoutApp = ({ isDarkMode, setIsDarkMode }) => {
    const [collapsed, setCollapsed] = useState(false);
    const siderStyle = {
        backgroundColor: "#222831",
        overflowX: "hidden",
        height: "100vh",
        position: "fixed",
        insetInlineStart: 0,
        top: 0,
        bottom: 0,
        scrollbarWidth: "thin",
        scrollbarColor: "unset",
    };
    return (
        <Layout hasSider className={'container-fluid m-0 p-0'}>
            <Sider
                style={siderStyle}
                trigger={null}
                collapsible
                collapsed={collapsed}
            >
                <MenuSide />
            </Sider>
            <Header
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                isDarkMode={isDarkMode}
                toggleMode={() => setIsDarkMode(!isDarkMode)}
            />

            />
            <Layout className={`${isDarkMode ? "dark-mode" : "light-mode"} ${collapsed ? 'custom-layout-collapsed':'custom-layout-expanded'} custom-layout`}>
                <Content  className={`${isDarkMode ? "dark-mode" : "light-mode"} custom-layout`}>
                    <Outlet/>
                </Content>
            </Layout>
            <MobileNav />
        </Layout>
    );
};

export default LayoutApp;
