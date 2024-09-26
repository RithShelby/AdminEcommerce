import React from "react";
import CurrentDate from "../currentDate/date";
import { Button} from "antd";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaBars } from "react-icons/fa";
import { MenuCustom } from "../../widget/Menu";
import { Settings } from "./Setting";

const Header = ({ collapsed, setCollapsed, isDarkMode, toggleMode }) => {
  return (
    <div className={`${isDarkMode  ? "dark-mode" : "light-mode"} ${collapsed ? 'custom-header-collapsed' : 'custom-header-expanded'} d-flex justify-content-between py-3 custom-header fixed-top` }>
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
      <div className="d-flex align-items-center">
        <label className="switch border border-3 rounded-5 ">
          <input type="checkbox" onClick={toggleMode} />
          <span className="slider"></span>
        </label>
        <div>{/* Alert Something*/}</div>
        <MenuCustom MenuItem={Settings} />
      </div>
    </div>
  );
};

export default Header;
