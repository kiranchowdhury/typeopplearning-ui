import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { selectorTrainingCat, GetEquipmentTypeListAction, GetEquipmentTypeDataListAction} from './../../subcriptions-reducer';
import { TrainingCatState, EquipmentType, EquipmentData } from '../../subscriptions-state';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tl-purchase-equipment-list',
  templateUrl: './purchase-equipment-list.component.html',
  styleUrls: ['./purchase-equipment-list.component.scss']
})
export class PurchaseEquipmentListComponent implements OnInit {

  equipmentType : EquipmentType[];
  equipmentData : EquipmentData[];
  constructor(private store : Store<AppState>) { }
  form: FormGroup ;
  loading: boolean = false;
  loadingMsg: string = '';

  ngOnInit() {
    this.store.select(selectorTrainingCat).subscribe(
      (equipmentTypeState: TrainingCatState) => {
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
    this.store.select(selectorTrainingCat).subscribe(
      (equipmentTypeState: TrainingCatState) => {
       
        this.equipmentData =equipmentTypeState.equipmentData;
        //console.log("Equipment list 22", this.equipmentData);
      }
    )
  }

  purchaseTraining = (equip)=>{
    console.log(equip);
  }

}
