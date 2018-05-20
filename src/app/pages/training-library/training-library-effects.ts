import { TrainingLibraryContract } from './training-library-contract';
import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { TrainingLibraryService } from "./training-library-service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { switchMap, map } from "rxjs/operators";
import { TrainingLibraryActionTypes, GetTrainingLibraryAction, GetTrainingLibrarySuccessAction, GetTrainingLibraryFailAction } from './training-library-reducer';

@Injectable()
export class TrainingLibraryEffects {
    constructor(
        private action$: Actions<Action>,
        private trainingLibraryService: TrainingLibraryService,
        private router: Router,
    ) {}

    @Effect()
    getTrainingLibraries(): Observable<Action> {
        return this.action$.ofType(TrainingLibraryActionTypes.GET_TRAINING_LIBRARY).pipe(
            switchMap((action: GetTrainingLibraryAction) =>
                this.trainingLibraryService.getTrainingLibrary()
                .pipe(
                    map((resp: TrainingLibraryContract) => (resp.status === 1) ?
                    new GetTrainingLibrarySuccessAction(resp)
                    : new GetTrainingLibraryFailAction({code: resp.code, message: resp.message}))
                )
            )
        )
    }
}
