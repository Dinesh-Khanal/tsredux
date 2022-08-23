import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersModel, UserModel } from "../models/user-model";

const initialState: UsersModel = {
  users: [],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action: PayloadAction<UserModel[]>) {
      state.users = action.payload;
    },
  },
});
export default userSlice;
