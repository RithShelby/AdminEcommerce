import React, { useContext, useEffect } from "react";
import { RoleContext } from "../..";
import { Link } from "react-router-dom";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { useRoles } from "../../core/hook";

const PermissionAction = ({ id }) => {
  const { setCatchRole, setShowRoleById } = useContext(RoleContext);
  const { getShowRoleById } = useRoles();

  const handlShowRoleById = () => {
    setCatchRole(id);
    setShowRoleById(true);
  };
  // useEffect(() => {
  //   getShowRoleById(id);
  // }, []);
  return (
    <Link onClick={handlShowRoleById}>
      {" "}
      <HiOutlineViewfinderCircle
        onClick={() => {
          getShowRoleById(id);
        }}
        className="mx-2 icon_hover text-dark"
      />
    </Link>
  );
};

export default PermissionAction;
