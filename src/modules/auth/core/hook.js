import { useDispatch } from "react-redux";
import { reqLogin } from "./request";
import { setToken } from "./authSlice";
import Swal from "sweetalert2";

const useAuth = () => {
  const dispatch = useDispatch();

  const onLogin = (payload) => {
    reqLogin(payload)
      .then((res) => {
        const data = res.data.data;
        dispatch(setToken(data.token));
        alert("Login Success!");
        window.location.href = "/";
      })
      .catch((err) => alert(err));
  };

  return { onLogin };
};

export { useAuth };
