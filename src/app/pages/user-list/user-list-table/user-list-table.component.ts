import { Component, OnInit } from '@angular/core';
import { User } from '../user-list-state';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorUserList } from '../user-list-reducer';
import { UserListState } from '../user-list-state';

@Component({
  selector: 'tl-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.scss']
})
export class UserListTableComponent implements OnInit {

  userList: User[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select( selectorUserList ).subscribe(
      (userListState: UserListState) => {
        console.log('------user list--------');
        console.log(userListState.userList);
        this.userList = userListState.userList;
      }
    )
  }

}
