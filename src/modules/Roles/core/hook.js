import { useDispatch } from "react-redux";
import {
  setGetRoleById,
  setListRole,
  setUpdateRole,
  updatePermission,
} from "./roleSlice";
import {
  reCreateRoles,
  reDeleteRoles,
  reGetRoles,
  reUpdateRoles,
  reqGetRolesById,
  reqTogglePermissions,
} from "./request";
import { useNavigate } from "react-router-dom";
import { setLoadingList } from "../../loading/core/loadingSlice";

const useRoles = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getRoles = () => {
    dispatch(setLoadingList(true));
    reGetRoles()
      .then((respone) => {
        dispatch(setLoadingList(false));
        dispatch(setListRole(respone.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createRoles = (payload) => {
    dispatch(setLoadingList(true));
    return reCreateRoles(payload)
      .then(() => {
        dispatch(setLoadingList(false));
        getRoles();
        navigate("/roles");
        alert("Create Roles Success");
        window.location.href = "/roles";
      })
      .catch((err) => {
        console.log(err);
        dispatch(setLoadingList(false));
        alert("Create Roles Failed!");
      });
  };

  const getShowRoleById = (id) => {
    return reqGetRolesById(id).then((res) => {
      dispatch(setGetRoleById(res.data.data));
    });
  };

  const updateRole = (id, payload) => {
    dispatch(setLoadingList(true));
    return reUpdateRoles(id, payload)
      .then((response) => {
        dispatch(setUpdateRole(response.data.data));
        navigate("/roles");
        alert("Update Role Success");
      })
      .catch((err) => {
        alert("Update User Failed!");
      });
  };

  const getDeleteRole = (id) => {
    dispatch(setLoadingList(true));
    return reDeleteRoles(id)
      .then(() => {
        dispatch(setLoadingList(false));
        window.location.href = "/roles";
      })
      .catch((err) => console.log(err));
  };
  const onUpdatePermission = (payload) => {
    reqTogglePermissions(payload).then((res) => {
      console.log(res.data.data);
      getShowRoleById(payload.id);
    });
  };
  const onTogglePermissions = (permission) =>
    dispatch(updatePermission(permission));
  // const getTogglePermission = (payload) => {
  //   dispatch(setLoadingList(true));
  //   return reqTogglePermissions(payload).then((res) => {
  //     // console.log(res);
  //   });
  // };

  return {
    getRoles,
    // createRoles,
    // updateRole,
    // getShowRoleById,
    // onTogglePermissions,
    // onUpdatePermission,
    // getTogglePermission,
    getDeleteRole,
  };
};
export { useRoles };
