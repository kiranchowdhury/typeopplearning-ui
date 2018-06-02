import { TrainingCatContract, EquipmentDataContract, EquipmentTypeContract } from './subscriptions-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { SubscriptionService } from "./subscriptions-service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { TrainingCategoryActionTypes, GetTrainingCategoryAction, GetTrainingCategorySuccessAction, 
    GetTrainingCategoryFailAction, GetEquipmentTypeListAction, GetEquipmentTypeListSuccessAction,
    GetEquipmentTypeListFailAction, GetEquipmentTypeDataListAction, GetEquipmentTypeDataListSuccessAction,
    GetEquipmentTypeDataListFailAction } from './subcriptions-reducer';

@Injectable()
export class TrainingCatEffects {
    constructor(
        private action$: Actions<Action>,
        private subscriptionService: SubscriptionService,
        private router: Router,
    ) {}

    @Effect()
    getTrainingSubscription(): Observable<Action> {
        return this.action$.ofType(TrainingCategoryActionTypes.GET_TRAINING_CATEGORY).pipe(
            switchMap((action: GetTrainingCategoryAction) =>
                this.subscriptionService.getTrainingCat()
                .pipe(
                    map((resp: TrainingCatContract) => (resp.status === 1) ?
                    new GetTrainingCategorySuccessAction(resp)
                    : new GetTrainingCategoryFailAction({code: resp.code, message: resp.message}))
                )
            )
        )
    }

    @Effect()
    getEquipmentTypeList(): Observable<Action> {
        return this.action$.ofType(TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST).pipe(
        switchMap((action: GetEquipmentTypeListAction)=>
        this.subscriptionService.getEquipmentTypesList(action.payload).pipe(
            map((response: EquipmentTypeContract) =>
        (response.status === 1)? new GetEquipmentTypeListSuccessAction(response) :
        new GetEquipmentTypeListFailAction({code: response.code, message: response.message}))
        ))
        )
    }

    @Effect()
    getEquipmentDataTypeList(): Observable<Action> {
        return this.action$.ofType(TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST).pipe(
        switchMap((action: GetEquipmentTypeDataListAction)=>
        this.subscriptionService.getEquipmentListOnType(action.payload).pipe(
            map((response: EquipmentDataContract) =>
        (response.status === 1)? new GetEquipmentTypeDataListSuccessAction(response) :
        new GetEquipmentTypeDataListFailAction({code: response.code, message: response.message}))
        ))
        )
    }
}
