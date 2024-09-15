import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRoles } from "../core/hook";
import { useSelector } from "react-redux";

const ShowRole = ({ id }) => {
  const {
    getRoleById: { role = null, permission = [] },
  } = useSelector((state) => state.roles);
  console.log(permission);
  const { onTogglePermissions, onUpdatePermission, getShowRoleById } =
    useRoles();
  const onSubmit = () => {
    const payload = {
      roleId: role.id,
      permission: permission.map((p) => ({
        permissionId: p.permissionId,
        status: !!p.status,
      })),
    };
    onUpdatePermission(payload);
  };
  useEffect(() => {
    getShowRoleById(id);
  }, []);
  return (
    <div>
      <form>
        {permission.map((p, i) => {
          return (
            <div key={i} className="d-flex">
              <input
                onChange={() => onTogglePermissions(p)}
                checked={!!p.status}
                className="form-check-input"
                type="checkbox"
              />
              <p>{p.name}</p>
            </div>
          );
        })}
      </form>
      <button className="btn btn-primary" onClick={onSubmit}>
        Save Changes
      </button>
    </div>
  );
};

export default ShowRole;
