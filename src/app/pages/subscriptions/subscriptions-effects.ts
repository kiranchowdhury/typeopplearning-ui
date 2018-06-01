import { TrainingCatContract } from './subscriptions-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { SubscriptionService } from "./subscriptions-service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { TrainingCategoryActionTypes, GetTrainingCategoryAction, GetTrainingCategorySuccessAction, 
    GetTrainingCategoryFailAction } from './subcriptions-reducer';

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
}
