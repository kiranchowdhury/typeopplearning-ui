import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';

const routes: Routes = [{
  path: '',
  component: UserListContainerComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
