import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrainingLibContainerComponent } from './training-lib-container/training-lib-container.component';

const routes: Routes = [{
  path: '',
  component: TrainingLibContainerComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingLibraryRoutingModule { }
