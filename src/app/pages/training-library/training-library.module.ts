import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingLibraryRoutingModule } from './training-library-routing.module';
import { TrainingLibContainerComponent } from './training-lib-container/training-lib-container.component';

@NgModule({
  imports: [
    CommonModule,
    TrainingLibraryRoutingModule
  ],
  declarations: [TrainingLibContainerComponent]
})
export class TrainingLibraryModule { }
