import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { UserListSearchComponent } from './user-list-search/user-list-search.component';
import { UserListTableComponent } from './user-list-table/user-list-table.component';
import { SharedModule } from '../../@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { userListReducer } from './user-list-reducer';
import { UserListEffects } from './user-list-effects'
import { EffectsModule } from '@ngrx/effects';
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule,
    SharedModule,
    StoreModule,
    StoreModule.forFeature ('userList', {
      userListState: userListReducer
    }),
    EffectsModule.forFeature([UserListEffects])
  ],
  declarations: [UserListContainerComponent, UserListSearchComponent, UserListTableComponent]
})
export class UserListModule { }
