import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListRoutingModule } from './user-list-routing.module';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';

@NgModule({
  imports: [
    CommonModule,
    UserListRoutingModule
  ],
  declarations: [UserListContainerComponent]
})
export class UserListModule { }
