// request.js
import axios from "axios";

const reqGetUsers = () => {
  return axios.get("users"); // Use relative URL
};
const reGetUserByUuid = (uuid) => {
  return axios.get("users/" + uuid); // Use relative URL
};
const reGetAdminProfile = () => {
  return axios.get("users/my-profile");
};
const reCreateUser = (payload) => {
  return axios.post("users", payload);
};

const reqUpdateUser = (uuid, payload) => {
  return axios.put(`users/${uuid}`, payload); // Use relative URL
};

const reqToggleStatus = (uuid, payload) => {
  return axios.put(`users/${uuid}/update-is-deleted`, payload);
};
export {
  reqGetUsers,
  reGetAdminProfile,
  reCreateUser,
  reqUpdateUser,
  reGetUserByUuid,
  reqToggleStatus,
};
// export { reqGetUsers, reCreateUser, reqUpdateUser, reGetUserByUuid };
