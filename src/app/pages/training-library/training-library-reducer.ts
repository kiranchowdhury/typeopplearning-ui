import { TrainingLibraryState } from './training-library-state';
import { TrainingLibraryContract } from './training-library-contract';
import { Action } from "@ngrx/store";
import { ErrorResponse } from "../../@core/error/error-response";
import { AppState } from "../../@models/app-state";

export enum TrainingLibraryActionTypes {
    GET_TRAINING_LIBRARY = 'Get Training Library',
    GET_TRAINING_LIBRARY_SUCCESS = 'Get Training Library Success',
    GET_TRAINING_LIBRARY_FAIL = 'Get Training Library Fail',
}

export class GetTrainingLibraryAction implements Action {
    readonly type = TrainingLibraryActionTypes.GET_TRAINING_LIBRARY;
    constructor() {}
}

export class GetTrainingLibrarySuccessAction implements Action {
    readonly type = TrainingLibraryActionTypes.GET_TRAINING_LIBRARY_SUCCESS;
    constructor(public payload: TrainingLibraryContract) {}
}

export class GetTrainingLibraryFailAction implements Action {
    readonly type = TrainingLibraryActionTypes.GET_TRAINING_LIBRARY_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export type TrainingLibraryActions = GetTrainingLibraryAction | GetTrainingLibrarySuccessAction | GetTrainingLibraryFailAction

export const initialTrainingLibraryState: TrainingLibraryState = {
    loading: false,
    loadingMsg: '',
    trainingLibraries: [],
    count: 0,
    currentPage: 1,

}

export const selectorTrainingLibrary = (state: AppState) => state.trainingLibrary.trainingLibraryState || initialTrainingLibraryState;

export function trainingLibraryReducer(
    state: TrainingLibraryState = initialTrainingLibraryState,
    action: TrainingLibraryActions
): TrainingLibraryState {
    switch (action.type) {
        case TrainingLibraryActionTypes.GET_TRAINING_LIBRARY:
            return {
                ...state,
                loading: true,
                loadingMsg: 'Retreiving training libraries...'
            }
        case TrainingLibraryActionTypes.GET_TRAINING_LIBRARY_SUCCESS:
            return {
                ...state,
                trainingLibraries: action.payload.trainingLibrary,
                count: action.payload.trainingLibrary.length,
                loading: false,
                loadingMsg: '',
            }
        case TrainingLibraryActionTypes.GET_TRAINING_LIBRARY_FAIL:
            return {
                ...state,
                errorCode: action.payload.code,
                errorMsg: action.payload.message,
            }
        default:
            return state;
    }
}
