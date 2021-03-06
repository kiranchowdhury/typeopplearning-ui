import { User, UserDetailData, UserTrainingStatus} from './user-list-state';

export interface UserListContract {
  status: number;
  code: string;
  message: string;
  count: number;
  userList: User[];
}

export interface CreateUser {
  user: User;
}

export interface CreateUserResponse {
  status: number;
  code: string;
  message: string;
  user: User;
}

export interface RemoveUser {
  user: User;
}

export interface RemoveUserResponse {
  status: number;
  code: string;
  message: string;
  user: User;
}

export interface UserDetailReq{
  fullName : string;
}

export interface UserDetailContract{
  status: number;
  code: string;
  message: string;
  userDetail : UserDetailData 
}

export interface UserTrainingReq{
  fullName : string;
}

export interface UserTrainingContract { 
  status: number;
  code: string;
  message: string;
  userTrainingStatus : UserTrainingStatus ;
  count : number;
}
