import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingContainerComponent } from './training-container/training-container.component';
import { TrainingEquipmentComponent } from './training-equipment/training-equipment.component';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TrainingsRoutingModule } from './training-routing.module';
import { SharedModule } from '../../@shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { trainingReducer } from './training-reducer';
import { TrainingEffects } from './training-effects'

@NgModule({
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    SharedModule,
    MatCardModule,
    StoreModule.forFeature('training', {
      trainingState: trainingReducer
    }),
    EffectsModule.forFeature([TrainingEffects])
  ],
  declarations: [TrainingContainerComponent, TrainingEquipmentComponent]
})
export class TrainingModule { }
