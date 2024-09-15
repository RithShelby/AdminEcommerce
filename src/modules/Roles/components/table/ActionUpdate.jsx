import React, { useContext } from "react";
import { RoleContext, UserContext } from "../..";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const ActionUpdateRole = ({ id }) => {
  const { setCatchRole, setShowUpdateRole } = useContext(RoleContext);

  const handleShowUpdateModal = () => {
    setCatchRole(id);
    setShowUpdateRole(true);
  };

  return (
    <Link onClick={handleShowUpdateModal}>
      {" "}
      <AiTwotoneEdit className="mx-2 icon_hover text-dark" />
    </Link>
  );
};

export default ActionUpdateRole;
