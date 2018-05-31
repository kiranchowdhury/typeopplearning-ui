import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { selectorTraining, GetEquipmentTypeListAction} from './../../training-reducer';
import { TrainingState, EquipmentType } from '../../training-state';

@Component({
  selector: 'tl-equipment-type-list',
  templateUrl: './equipment-type-list.component.html',
  styleUrls: ['./equipment-type-list.component.scss']
})
export class EquipmentTypeListComponent implements OnInit {
  equipmentType : EquipmentType[];
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    console.log("on initialise Equipment Type list", this.equipmentType);
    this.store.select(selectorTraining).subscribe(
      (equipmentTypeState: TrainingState) => {
        console.log("Equipment state 222", equipmentTypeState);
        this.equipmentType =equipmentTypeState.equipmentType;
        console.log("Equipment list 22", this.equipmentType);
      }
    )
    console.log("Equipment type after", this.equipmentType);
  }

}
