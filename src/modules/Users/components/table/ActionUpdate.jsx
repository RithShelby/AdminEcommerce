import React, { useContext } from "react";
import { UserContext } from "../..";
import { AiTwotoneEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const ActionUpdate = ({ uuid }) => {
  const { setCatchUserData, setUpdateModalUser } = useContext(UserContext);

  const handleShowUpdate = () => {
    setCatchUserData(uuid);
    setUpdateModalUser(true);
  };

  return (
    <Link onClick={handleShowUpdate}>
      {" "}
      <AiTwotoneEdit className="mx-2 icon_hover text-dark" />
    </Link>
  );
};

export default ActionUpdate;
