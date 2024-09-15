import React from "react";
import { useUsers } from "../../core/hook";

const Active_InActive = ({ uuid, status }) => {
  const { toggleStatus } = useUsers();

  const statusToggler = async (uuid, status) => {
    await toggleStatus(uuid, status);
    window.location.href = "/users";
  };

  return (
    <button
      className={` ${status ? "btn btn-primary fs-6" : "btn btn-danger fs-6"}`}
      onClick={() =>
        statusToggler(uuid, {
          isDeleted: status ? true : false,
        })
      }
    >
      {status ? "Active" : "Inactive"}
    </button>
  );
};

export default Active_InActive;
