import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    admin: [],
    userByid: [],
    isDeleted: false,
  },
  reducers: {
    setList: (state, action) => {
      state.list = action.payload;
    },
    setAdminProfile: (state, action) => {
      state.admin = action.payload;
    },
    setUserByUuid: (state, action) => {
      state.userByid = action.payload;
    },
    setUpdate: (state, action) => {
      const updatedUser = action.payload;
      state.list = state.list.map((user) => {
        if (user.uuid === updatedUser.uuid) {
          return updatedUser;
        }
        console.log(updatedUser);
        return user;
      });
    },
  },
});

export const {
  setList,
  setUpdate,
  setUpdatedIsDeletedByUuid,
  setUserByUuid,
  setAdminProfile,
} = usersSlice.actions;

export default usersSlice.reducer;
