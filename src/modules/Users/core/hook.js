// useUsers.js
import { useDispatch } from "react-redux";
import {
  setAdminProfile,
  setList,
  setLoading,
  setUpdate,
  setUserByUuid,
} from "./usersSlice";
import {
  reCreateUser,
  reqGetUsers,
  reqUpdateUser,
  reqToggleStatus,
  reGetUserByUuid,
  reGetAdminProfile,
} from "./request";
import { useNavigate } from "react-router-dom";
import { setLoadingList } from "../../loading/core/loadingSlice";
import { sweetAlert } from "../../widget/sweetAlert";
const useUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUsers = () => {
    dispatch(setLoadingList(true));
    reqGetUsers().then((response) => {
      // console.log(response.data.data);
      dispatch(setList(response.data.data));
      dispatch(setLoadingList(false));
    });
  };
  const getUserByUuid = (uuid) => {
    dispatch(setLoadingList(false));
    return reGetUserByUuid(uuid).then((response) => {
      // console.log(response.data.data);
      dispatch(setUserByUuid(response.data.data));
      dispatch(setLoadingList(false));
    });
  };
  const getAdminProfile = () => {
    dispatch(setLoadingList(true));
    reGetAdminProfile().then((response) => {
      // console.log(response.data.data);
      dispatch(setAdminProfile(response.data.data));
      dispatch(setLoadingList(false));
    });
  };
  const createUser = (payload) => {
    // console.log(payload);
    dispatch(setLoadingList(true));
    return reCreateUser(payload)
      .then((response) => {
        console.log(response.data.data);
        dispatch(setLoadingList(false));
        getUsers();
        navigate("/users");
        // alert("Create Users Success!");
        sweetAlert("Good job!", "Login Success!", "success");
      })
      .catch((err) => {
        // console.log(err);
        dispatch(setLoadingList(false));
        alert("Create Users Failed!");
      });
  };

  const updateUser = (uuid, payload) => {
    dispatch(setLoadingList(true));
    return reqUpdateUser(uuid, payload)
      .then((res) => {
        dispatch(setUpdate(res.data.data)); // Update user data in the state
        navigate("/users");
        dispatch(setLoadingList(false));
        alert("Update User Success!");
        window.location.href = "/users";
      })
      .catch((err) => {
        console.log(err);
        alert("Update User Failed!");
      });
  };

  const toggleStatus = (uuid, payload) => {
    return reqToggleStatus(uuid, payload)
      .then((res) => console.log("status updated"))
      .catch((err) => console.log(err));
  };
  return {
    getUsers,
    createUser,
    getAdminProfile,
    updateUser,
    toggleStatus,
    getUserByUuid,
  };
};

export { useUsers };
