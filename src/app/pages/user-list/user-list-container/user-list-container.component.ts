import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../@models/app-state';
import { Store } from '@ngrx/store';
import { User } from '../../../@core/auth/auth.state';
import { GetUserListAction, GetUserListActionSuccess, GetUserListActionFailed } from '../user-list-reducer'

@Component({
  selector: 'tl-user-list-container',
  templateUrl: './user-list-container.component.html',
  styleUrls: ['./user-list-container.component.scss']
})
export class UserListContainerComponent implements OnInit {

  loading: boolean = false;
  loadingMsg: string = '';
  mode: string = 'view';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch( new GetUserListAction() )
  }

}
