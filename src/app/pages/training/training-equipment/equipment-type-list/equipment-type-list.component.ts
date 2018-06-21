import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { selectorTraining, GetEquipmentTypeListAction, GetEquipmentTypeDataListAction} from './../../training-reducer';
import { TrainingState, EquipmentType, EquipmentData } from '../../training-state';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tl-equipment-type-list',
  templateUrl: './equipment-type-list.component.html',
  styleUrls: ['./equipment-type-list.component.scss']
})
export class EquipmentTypeListComponent implements OnInit {
  equipmentType : EquipmentType[];
  equipmentData : EquipmentData[];
  constructor(private store : Store<AppState>) { }
  form: FormGroup ;
  loading: boolean = false;
  loadingMsg: string = '';
  pathHash: string;
  
  ngOnInit() {
    this.pathHash = window.location.hash;
    this.store.select(selectorTraining).subscribe(
      (equipmentTypeState: TrainingState) => {
        //console.log("Equipment state 222", equipmentTypeState);
        this.equipmentType =equipmentTypeState.equipmentType;
      }
    )
    
  }

  getEquipData = (equipType) => {
    this.form = new FormGroup({
      equipmentId: new FormControl(equipType.id),
      equipmentType: new FormControl(equipType.equipmentType),
    });
    this.store.dispatch(new GetEquipmentTypeDataListAction(this.form.value));
    this.store.select(selectorTraining).subscribe(
      (equipmentTypeState: TrainingState) => {
       
        this.equipmentData =equipmentTypeState.equipmentData;
        //console.log("Equipment list 22", this.equipmentData);
      }
    )
  }

  getStartTraining= (equip)=>{
    console.log(equip);
  }

  

}
