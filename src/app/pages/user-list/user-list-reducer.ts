import { Action } from "@ngrx/store";
import { UserListContract, CreateUser, CreateUserResponse } from "./user-list-contract"
import { ErrorResponse } from "../../@core/error/error-response";
import { UserListState } from "./user-list-state";
import { AppState } from "../../@models/app-state";

export enum UserListActionTypes {
  GET_USER_LIST = "Get User List",
  GET_USER_LIST_SUCCESS = "Get User List Success",
  GET_USER_LIST_FAILED = "Get User List Failed",

  CREATE_USER = "Create User",
  CREATE_USER_SUCCESS = "Create User Success",
  CREATE_USER_FAILED = "Create User Failed"

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

export class CreateUserAction implements Action {
  readonly type = UserListActionTypes.CREATE_USER;
  constructor (public payload: CreateUser) {};
}

export class CreateUserSuccessAction implements Action {
  readonly type = UserListActionTypes.CREATE_USER_SUCCESS;
  constructor (public payload: CreateUserResponse) {};
}

export class CreateUserFailedAction implements Action {
  readonly type = UserListActionTypes.CREATE_USER_FAILED;
  constructor (public payload: ErrorResponse) {};
}

export type UserListActions = GetUserListAction |
                              GetUserListActionSuccess |
                              GetUserListActionFailed |
                              CreateUserAction |
                              CreateUserSuccessAction |
                              CreateUserFailedAction

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
    case UserListActionTypes.CREATE_USER :
    return {
      ...state,
      loading: true,
      loadingMsg: 'Creating User'
    }
    case UserListActionTypes.CREATE_USER_SUCCESS :
    console.log('======userlist action success======');
    console.log(action.payload);
    return{
      ...state,
      loading: false,
      userList: patchItems(state.userList, action.payload.user),
      count: state.count+1,
      loadingMsg: 'User Created Successfully'
    }
    case UserListActionTypes.CREATE_USER_FAILED :
    return {
      ...state,
      errorCode: action.payload.code,
      loading: false,
      loadingMsg: action.payload.message
    }
    default :
    return state;

  }
}


function patchItems(items: any[], item: any): any[] {
  items.push(item);
  return items;
}
