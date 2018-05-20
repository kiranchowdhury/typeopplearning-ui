import { EffectsModule } from '@ngrx/effects';
import { TrainingLibraryEffects } from './training-library-effects';
import { TrainingLibrary } from './training-library-state';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingLibraryRoutingModule } from './training-library-routing.module';
import { TrainingLibContainerComponent } from './training-lib-container/training-lib-container.component';
import { SharedModule } from '../../@shared/shared.module';
import { trainingLibraryReducer } from './training-library-reducer';
import { TrainingLibraryService } from './training-library-service';

@NgModule({
  imports: [
    CommonModule,
    TrainingLibraryRoutingModule,
    SharedModule,
    StoreModule.forFeature('trainingLibrary',{
        trainingLibraryState: trainingLibraryReducer
    }),
    EffectsModule.forFeature([TrainingLibraryEffects])
  ],
  declarations: [TrainingLibContainerComponent],
  providers: [TrainingLibraryService]
})
export class TrainingLibraryModule { }
