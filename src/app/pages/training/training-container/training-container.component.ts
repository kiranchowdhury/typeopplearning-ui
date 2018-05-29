import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../../../@models/app-state'
import { EquipmentCat, EquipmentCatState } from './../training-state';
import { selectorEquipment, GetEquipmentListAction } from '../training-reducer';

@Component({
  selector: 'tl-training-container',
  templateUrl: './training-container.component.html',
  styleUrls: ['./training-container.component.scss']
})
export class TrainingContainerComponent implements OnInit {

  breadcrumbs = [{
    name: 'Customers',
    link: '/pages/customers',
    active: false,
  }, {
    name: 'How To',
    link: '/pages/howto',
    active: true,
  }]
  loading: boolean = false;
  loadingMsg: string = '';
  equipmentCat: EquipmentCat[];
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    console.log('===========on dispatch');
    this.store.dispatch(new GetEquipmentListAction());
  }

}
