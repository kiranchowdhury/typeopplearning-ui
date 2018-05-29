import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingContainerComponent } from './training-container/training-container.component';
import { TrainingEquipmentComponent } from './training-equipment/training-equipment.component';

import { EffectsModule } from '@ngrx/effects';
import { TrainingEffects} from './training-effects'
import { EquipmentCat } from './training-state'
import { StoreModule } from '@ngrx/store';
import { equipmentListReducer} from './training-reducer';
import { TrainingService } from './training-service';
import { TrainingsRoutingModule } from './training-routing.module';
import { SharedModule } from '../../@shared/shared.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    SharedModule,
    MatCardModule,
    StoreModule.forFeature('equipmentCat',{
      trainingState: equipmentListReducer
  }),
  EffectsModule.forFeature([TrainingEffects])
  ],
  declarations: [TrainingContainerComponent, TrainingEquipmentComponent],
  providers: [TrainingService]
})
export class TrainingModule { }
