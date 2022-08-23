import { ThunkAction, AnyAction } from "@reduxjs/toolkit";
import { RootState } from ".";
import userService from "../services/userService";
import userSlice from "./user-slice";
import { UserModel } from "../models/user-model";

const userAction = userSlice.actions;

export const fetchUsers = (): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> => {
  return async (dispatch) => {
    const response: UserModel[] = await userService.getUsers();
    dispatch(userAction.setUsers(response));
  };
};
