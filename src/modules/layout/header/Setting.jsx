import React from "react";
import { Divider, MenuItem } from "@mui/material";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import { RiLogoutCircleRLine } from "react-icons/ri";
export const Settings = () => {
  return (
    <React.Fragment>
      <MenuItem>
        <Link className="nav-link px-1" to="/admin-profile">
          <VscAccount className="me-2" />
          My Admin
        </Link>
      </MenuItem>
      <Divider />
      <MenuItem>
        <Link
          className="nav-link px-1"
          to="/"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }}
        >
          <RiLogoutCircleRLine className="me-2" />
          Logout
        </Link>
      </MenuItem>
    </React.Fragment>
  );
};
