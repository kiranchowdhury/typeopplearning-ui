import { TrainingContract, EquipmentTypeContract } from './training-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { TrainingService } from "./training.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { TrainingActionTypes, GetEquipmentListAction, 
  GetEquipmentListSuccessAction, GetEquipmentListFailedAction,
  GetEquipmentTypeListAction, GetEquipmentTypeListSuccessAction, GetEquipmentTypeListFailAction } from './training-reducer';
import { RouterEvent } from '@angular/router/src/events';

@Injectable()
export class TrainingEffects {
  constructor(
    private $action: Actions<Action>,
    private trainingService: TrainingService
  ){}


  @Effect()
  getEquipmentList(): Observable<Action> {
    return this.$action.ofType(TrainingActionTypes.GET_EQUIPMENT_LIST).pipe(
      switchMap((action: GetEquipmentListAction)=>
      this.trainingService.getEquipmentList().pipe(
        map((response: TrainingContract) =>
      (response.status === 1)? new GetEquipmentListSuccessAction(response) :
    new GetEquipmentListFailedAction({code: response.code, message: response.message}))
      ))
    )
  }

  @Effect()
  getEquipmentTypeList(): Observable<Action> {
    return this.$action.ofType(TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST).pipe(
      switchMap((action: GetEquipmentTypeListAction)=>
      this.trainingService.getEquipmentTypesList(action.payload).pipe(
        map((response: EquipmentTypeContract) =>
      (response.status === 1)? new GetEquipmentTypeListSuccessAction(response) :
    new GetEquipmentTypeListFailAction({code: response.code, message: response.message}))
      ))
    )
  }

}
