import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListContainerComponent } from './user-list-container/user-list-container.component';
import { LoginGuard } from '../../@core/guards/login.guard';

const routes: Routes = [{
  path: '',
  component: UserListContainerComponent,
  canActivate: [LoginGuard],
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListRoutingModule { }
