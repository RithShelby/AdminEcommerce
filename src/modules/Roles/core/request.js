import axios from "axios";
const reGetRoles = () => {
  return axios.get("roles");
};
const reqGetRolesById = (id) => {
  return axios.get(`roles/${id}`);
};
const reCreateRoles = (payload) => {
  return axios.post("roles", payload);
};
const reUpdateRoles = (id, payload) => {
  return axios.patch(`roles/${id}`, payload);
};
const reDeleteRoles = (id) => {
  return axios.delete(`roles/${id}`);
};

const reqTogglePermissions = (payload) => {
  return axios.put(`roles/update/permission`, payload);
};

export {
  reGetRoles,
  reCreateRoles,
  reUpdateRoles,
  reDeleteRoles,
  reqGetRolesById,
  reqTogglePermissions,
};
