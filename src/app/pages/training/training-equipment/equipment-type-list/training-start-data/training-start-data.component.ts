import { AppState } from './../../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { selectorTraining } from './../../../training-reducer';
import { TrainingState, EquipmentDetail } from '../../../training-state';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tl-training-start-data',
  templateUrl: './training-start-data.component.html',
  styleUrls: ['./training-start-data.component.scss']
})
export class TrainingStartDataComponent implements OnInit {
  equipmentDetail : EquipmentDetail[];
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.store.select(selectorTraining).subscribe(
      (equipmentTypeState: TrainingState) => {
        
        this.equipmentDetail =equipmentTypeState.equipmentDetail;
        console.log("Equipment detail 222",  this.equipmentDetail );
      }
    )
  }

}
