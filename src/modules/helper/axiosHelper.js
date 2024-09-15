// axiosSetup.js
import axios from "axios";
import jwtDecode from "jwt-decode";
const setUpAxios = () => {
  axios.defaults.baseURL = "http://13.214.207.172:8003/api/v1/";
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token)
      config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    return config;
  });
};

const getToken = () => localStorage.getItem("token");

const getPermissions = () => {
  const token = getToken();
  const decoded = jwtDecode(token);

  if (!decoded) return [];
  return decoded.scope.split(" ");
};

export { setUpAxios, getToken, getPermissions };
