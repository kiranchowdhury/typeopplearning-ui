export interface UserListState {
  errorCode?: string;
  errorMsg?: string;
  loading?: boolean;
  loadingMsg?: string;
  userList?: User[];
  count: number;
  currentPage: number;
}

export interface User {
  fullName: string;
  noOfTrainings: number;
  status: string;
  userId: string;
}
