import { useDispatch } from "react-redux";
import { reqLogin } from "./request";
import { setToken } from "./authSlice";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogin = (payload) => {
    reqLogin(payload)
      .then((res) => {
        const data = res.data.data;
        dispatch(setToken(data.token));
        navigate("/");
      })
      .catch((err) => alert(err));
  };

  return { onLogin };
};

export { useAuth };
