import { EquipmentContract } from './training-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { TrainingService } from "./training-service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { TrainingEquipmentActionTypes, GetEquipmentListAction, GetEquipmentListSuccessAction, GetEquipmentListFailAction } from './training-reducer';

@Injectable()
export class TrainingEffects {
    constructor(
        private action$: Actions<Action>,
        private trainingService: TrainingService,
        private router: Router,
    ) {}

    @Effect()
    getInvoiceList(): Observable<Action> {
        return this.action$.ofType(TrainingEquipmentActionTypes.GET_EQUIPMENT_LIST).pipe(
            switchMap((action: GetEquipmentListAction) =>
                this.trainingService.getEquipmentCatList()
                .pipe(
                    map((resp: EquipmentContract) => (resp.status === 1) ?
                    new GetEquipmentListSuccessAction(resp)
                    : new GetEquipmentListFailAction({code: resp.code, message: resp.message}))
                )
            )
        )
    }
    
}
