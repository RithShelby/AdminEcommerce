import { createSlice } from "@reduxjs/toolkit";

const rolesSlice = createSlice({
  name: "roles",
  initialState: {
    listRole: [],
    updateRoleList: [],
    getRoleById: {
      role: null,
      permission: [],
    },
    loading: false,
  },
  reducers: {
    setListRole: (state, action) => {
      state.listRole = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setGetRoleById: (state, action) => {
      state.getRoleById = { ...state.getRoleById, ...action.payload };
    },
    setUpdateRole: (state, action) => {
      const updaterRole = action.payload;
      state.updateRoleList = state.updateRoleList.map((role) => {
        if (role.id === role.id) {
          return updaterRole;
        }
        return role;
      });
    },
    setDeleteRole: (state, action) => {
      state.listRole = state.listRole.filter((role) => {
        return role.id !== action.payload.id;
      });
    },
    updatePermission: (state, action) => {
      state.getRoleById.permission = state.getRoleById.permission.map(
        (permission) => {
          if (action.payload.id === permission.id) {
            permission.status = Number(
              !!!(permission.status || permission.status)
            );
          }
          return permission;
        }
      );
    },
  },
});
export const {
  setListRole,
  setLoading,
  setUpdateRole,
  setDeleteRole,
  setGetRoleById,
  updatePermission,
} = rolesSlice.actions;
export default rolesSlice.reducer;
