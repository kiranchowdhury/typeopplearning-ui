import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingContainerComponent } from './training-container/training-container.component';
import { LoginGuard } from '../../@core/guards/login.guard';

const routes: Routes = [{
  path: '',
  component: TrainingContainerComponent,
  canActivate: [LoginGuard],
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingsRoutingModule { }