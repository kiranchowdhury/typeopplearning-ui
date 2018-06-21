export interface UserListState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  userList?: User[];
  count: number;
  currentPage: number;
  userDetail ?: UserDetailData;
  userTrainingStatus?: UserTrainingStatus;
}

export interface User {
  fullName: string;
  noOfTrainings: number;
  status: string;
  userId: string;
  url: string;
}

export interface UserTrainingStatus { 
  id: string;
  trainingName : string;
  staus : string;
}

export interface UserDetailData {
  fullName : string;
  email : string;
  phone : string;
  address : string;
}
