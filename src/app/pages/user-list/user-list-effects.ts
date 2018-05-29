import { UserListContract } from './user-list-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { UserListService } from "./user-list.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { UserListActionTypes, GetUserListAction, GetUserListActionSuccess, GetUserListActionFailed } from './user-list-reducer';
import { RouterEvent } from '@angular/router/src/events';

@Injectable()
export class UserListEffects {
  constructor (
    private $action: Actions<Action>,
    private userListService: UserListService,
    private router: Router
  ) {}

  @Effect()
  getUserList(): Observable<Action> {
    return this.$action.ofType(UserListActionTypes.GET_USER_LIST).pipe(
      switchMap((action: GetUserListAction) =>
    this.userListService.getUserList()
      .pipe(
        map((res: UserListContract) =>
      (res.status === 1) ? new GetUserListActionSuccess(res) : new GetUserListActionFailed({
        code: res.code, message: res.message
      }))
      )
  )
    )
  }

}
