import { selectorEquipment } from './../training-reducer';
import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { EquipmentCat, EquipmentCatState } from '../training-state';
import { GridOptions } from 'ag-grid';

@Component({
  selector: 'tl-training-equipment',
  templateUrl: './training-equipment.component.html',
  styleUrls: ['./training-equipment.component.scss']
})
export class TrainingEquipmentComponent implements OnInit {

  equipmentCat : EquipmentCat[];
  @ViewChild('nameedit') nameElement: ElementRef;
  constructor(private store : Store<AppState>) { }


  ngOnInit() {

    console.log("on initialise Equipment list", this.equipmentCat);
    this.store.select(selectorEquipment).subscribe(
      (equipmentState: EquipmentCatState) => {
        console.log("Equipment state 111", equipmentState);
        this.equipmentCat = equipmentState.equipmentCat;
        console.log("Equipment list 111", this.equipmentCat);
      }
    )
    console.log("Equipment list after", this.equipmentCat);
  }

}
