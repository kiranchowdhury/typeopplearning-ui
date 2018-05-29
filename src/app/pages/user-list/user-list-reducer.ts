import { Action } from "@ngrx/store";
import { UserListContract } from "./user-list-contract"
import { ErrorResponse } from "../../@core/error/error-response";
import { UserListState } from "./user-list-state";
import { AppState } from "../../@models/app-state";

export enum UserListActionTypes {
  GET_USER_LIST = "Get User List",
  GET_USER_LIST_SUCCESS = "Get User List Success",
  GET_USER_LIST_FAILED = "Get User List Failed"
}

export class GetUserListAction implements Action {
  readonly type = UserListActionTypes.GET_USER_LIST;
  constructor () {}
}

export class GetUserListActionSuccess implements Action {
  readonly type = UserListActionTypes.GET_USER_LIST_SUCCESS;
  constructor (public payload: UserListContract) {}
}

export class GetUserListActionFailed implements Action {
  readonly type = UserListActionTypes.GET_USER_LIST_FAILED;
  constructor (public payload: ErrorResponse) {}
}

export type UserListActions = GetUserListAction | GetUserListActionSuccess | GetUserListActionFailed

export const initialUserListState: UserListState = {
  errorCode: '',
  errorMsg: '',
  loading: true,
  loadingMsg: 'Loading User List',
  count: 0,
  currentPage: 1
}

export const selectorUserList = (state: AppState) => state.userList.userListState || initialUserListState;

export function userListReducer (
  state: UserListState = initialUserListState,
  action: UserListActions
): UserListState {
  switch (action.type) {
    case UserListActionTypes.GET_USER_LIST :
    return {
      ...state,
      loading: true,
      loadingMsg: 'Loading User List'
    }
    case UserListActionTypes.GET_USER_LIST_SUCCESS :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      userList: action.payload.userList,
      count: action.payload.count
    }
    case UserListActionTypes.GET_USER_LIST_FAILED :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      errorMsg: action.payload.message,
      errorCode: action.payload.code
    }
    default :
    return state;

  }
}
