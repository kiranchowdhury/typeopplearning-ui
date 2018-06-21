import { Action } from "@ngrx/store";
import { UserListContract, CreateUser, CreateUserResponse, RemoveUser, RemoveUserResponse ,
    UserDetailReq, UserDetailContract, UserTrainingReq, UserTrainingContract} from "./user-list-contract"
import { ErrorResponse } from "../../@core/error/error-response";
import { UserListState, User } from "./user-list-state";
import { AppState } from "../../@models/app-state";

export enum UserListActionTypes {
  GET_USER_LIST = "Get User List",
  GET_USER_LIST_SUCCESS = "Get User List Success",
  GET_USER_LIST_FAILED = "Get User List Failed",

  CREATE_USER = "Create User",
  CREATE_USER_SUCCESS = "Create User Success",
  CREATE_USER_FAILED = "Create User Failed",

  REMOVE_USER = "Remove User",
  REMOVE_USER_SUCCESS = "Remove User Success",
  REMOVE_USER_FAILED = "Remove User Failed",

  GET_USER_DETAIL = "Get User Detail",
  GET_USER_DETAIL_SUCCESS = "Get User Detail Success",
  GET_USER_DETAIL_FAIL = "Get User Detail Fail",

  GET_TRAINING_STATUS = "Get User Training Status",
  GET_TRAINING_STATUS_SUCCESS = "Get User Training Status Success",
  GET_TRAINING_STATUS_FAIL = "Get User Training Status Fail"

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

export class RemoveUserAction implements Action {
  readonly type = UserListActionTypes.REMOVE_USER;
  constructor (public payload: RemoveUser) {}
}

export class RemoveUserSuccessAction implements Action {
  readonly type = UserListActionTypes.REMOVE_USER_SUCCESS;
  constructor (public payload: RemoveUserResponse) {}
}

export class RemoveUserFailedAction implements Action {
  readonly type = UserListActionTypes.REMOVE_USER_FAILED;
  constructor (public payload: ErrorResponse) {}
}

export class GetUserDetailAction implements Action {
  readonly type = UserListActionTypes.GET_USER_DETAIL;
  constructor (public payload: UserDetailReq) {}
}

export class GetUserDetailSuccessAction implements Action {
  readonly type = UserListActionTypes.GET_USER_DETAIL_SUCCESS;
  constructor (public payload: UserDetailContract) {}
}

export class GetUserDetailFailAction implements Action {
  readonly type = UserListActionTypes.GET_USER_DETAIL_FAIL;
  constructor (public payload: ErrorResponse) {}
}

export class GetTrainingStatusAction implements Action {
  readonly type = UserListActionTypes.GET_TRAINING_STATUS;
  constructor (public payload: UserTrainingReq) {}
}

export class GetTrainingStatusSuccessAction implements Action {
  readonly type = UserListActionTypes.GET_TRAINING_STATUS_SUCCESS;
  constructor (public payload: UserTrainingContract) {}
}

export class GetTrainingStatusFailAction implements Action {
  readonly type = UserListActionTypes.GET_TRAINING_STATUS_FAIL;
  constructor (public payload: ErrorResponse) {}
}


export type UserListActions = GetUserListAction |
                              GetUserListActionSuccess |
                              GetUserListActionFailed |
                              CreateUserAction |
                              CreateUserSuccessAction |
                              CreateUserFailedAction |
                              RemoveUserAction |
                              RemoveUserSuccessAction |
                              RemoveUserFailedAction |
                              GetUserDetailAction |
                              GetUserDetailSuccessAction | GetUserDetailFailAction |
                              GetTrainingStatusAction |
                              GetTrainingStatusSuccessAction | GetTrainingStatusFailAction

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
    case UserListActionTypes.REMOVE_USER :
    console.log('---remove-user---action');
    return {
      ...state,
      loading: true,
      loadingMsg: 'Removing User'
    }
    case UserListActionTypes.REMOVE_USER_SUCCESS :
    console.log('---remove-user---success action', action.payload.user);
    let newList: User[] =  state.userList.filter((user) => {
      return user.userId !== action.payload.user.userId
    });
    return {
      ...state,
      loading: false,
      loadingMsg: 'User Removed Successfully',
      userList: newList
    }
    case UserListActionTypes.REMOVE_USER_FAILED :
    console.log('---remove-user---failed action');
    return {
      ...state,
      loading: false,
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }

    case UserListActionTypes.GET_USER_DETAIL :
     return {
      ...state,
      loading: true,
      loadingMsg: 'Get User Detail'
    }
    case UserListActionTypes.GET_USER_DETAIL_SUCCESS :
    console.log('success--------------user detail', action.payload.userDetail);
    return {
      ...state,
      loading: false,
      loadingMsg: 'User Detail Successfully received...',
      userDetail: action.payload.userDetail
    }
    case UserListActionTypes.GET_USER_DETAIL_FAIL :
    return {
      ...state,
      loading: false,
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }
    case UserListActionTypes.GET_TRAINING_STATUS :
     return {
      ...state,
      loading: true,
      loadingMsg: 'Get User Detail'
    }
    case UserListActionTypes.GET_TRAINING_STATUS_SUCCESS :
    //console.log('=============on success============');
    //console.log(action.payload);
    return {
      ...state,
      loading: false,
      loadingMsg: 'User Training Detail Successfully received...',
      userTrainingStatus: action.payload.userTrainingStatus
    }
    case UserListActionTypes.GET_TRAINING_STATUS_FAIL :
    return {
      ...state,
      loading: false,
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }
    default :
    return state;

  }
}


function patchItems(items: any[], item: any): any[] {
  items.push(item);
  return items;
}
