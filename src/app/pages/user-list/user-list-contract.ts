import { User } from './user-list-state';

export interface UserListContract {
  status: number;
  code: string;
  message: string;
  count: number;
  userList: User[];
}
