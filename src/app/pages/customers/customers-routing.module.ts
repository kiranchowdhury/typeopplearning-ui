import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerContainerComponent } from './customer-container/customer-container.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { LoginGuard } from '../../@core/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomerContainerComponent,
    canActivate: [LoginGuard],
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
