import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user-list-state';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorUserList } from '../user-list-reducer';
import { UserListState } from '../user-list-state';
import { NewUserComponent } from '../new-user/new-user.component';

@Component({
  selector: 'tl-user-list-table',
  templateUrl: './user-list-table.component.html',
  styleUrls: ['./user-list-table.component.scss']
})
export class UserListTableComponent implements OnInit {

  @Input() mode: string;
  @Output() removeUserEvent: EventEmitter<User> = new EventEmitter();

  userList: User[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select( selectorUserList ).subscribe(
      (userListState: UserListState) => {
        console.log('------user list--------', this.mode);
        console.log(userListState.userList);
        this.userList = userListState.userList;
      }
    )
  }

  onRemoveUser = (user: User) => {
    console.log('from list table ', user);
    this.removeUserEvent.emit(user);
  }

}
