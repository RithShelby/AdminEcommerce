import { Navigate } from "react-router-dom";
import { getPermissions } from "../helper/axiosHelper";

const isAllowed = (permission) => {
  const userPermissions = getPermissions();
  return userPermissions.includes(permission);
};

const HasPermission = ({ children, permission }) => {
  if (isAllowed(permission)) {
    return children;
  }
  return null;
};

const RouteHasPermission = ({ children, permission }) => {
  if (isAllowed(permission)) {
    return children;
  }
  return <Navigate to="/users" />;
};

export { HasPermission, RouteHasPermission };
