import axios from "axios";

const reqLogin = (payload = {}) => {
  return axios.post("auth/login", payload, {
    headers: {
      Authorization: "Basic ZWNvbTplY29tQDEyMw==",
    },
  });
};

export { reqLogin };
