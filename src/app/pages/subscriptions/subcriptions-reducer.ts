import { TrainingCatState } from './subscriptions-state';
import { TrainingCatContract } from './subscriptions-contract';
import { Action } from "@ngrx/store";
import { ErrorResponse } from "../../@core/error/error-response";
import { AppState } from "../../@models/app-state";

export enum TrainingCategoryActionTypes {
    GET_TRAINING_CATEGORY = 'Get Training Category',
    GET_TRAINING_CATEGORY_SUCCESS = 'Get Training Category Success',
    GET_TRAINING_CATEGORY_FAIL = 'Get Training Category Fail',
}

export class GetTrainingCategoryAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_TRAINING_CATEGORY;
    constructor() {}
}

export class GetTrainingCategorySuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_TRAINING_CATEGORY_SUCCESS;
    constructor(public payload: TrainingCatContract) {}
}

export class GetTrainingCategoryFailAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_TRAINING_CATEGORY_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export type TrainingCatActions = GetTrainingCategoryAction | GetTrainingCategorySuccessAction | GetTrainingCategoryFailAction

export const initialTrainingCatState: TrainingCatState = {
    loading: false,
    loadingMsg: '',
    trainingCat: [],
    count: 0,
    currentPage: 1,

}

export const selectorTrainingCat = (state: AppState) => state.trainingCat.trainingCatState || initialTrainingCatState;

export function trainingCatReducer(
    state: TrainingCatState = initialTrainingCatState,
    action: TrainingCatActions
): TrainingCatState {
    switch (action.type) {
        case TrainingCategoryActionTypes.GET_TRAINING_CATEGORY:
            return {
                ...state,
                loading: true,
                loadingMsg: 'Retreiving training libraries...'
            }
        case TrainingCategoryActionTypes.GET_TRAINING_CATEGORY_SUCCESS:
            return {
                ...state,
                trainingCat: action.payload.equipmentCat,
                count: action.payload.equipmentCat.length,
                loading: false,
                loadingMsg: '',
            }
        case TrainingCategoryActionTypes.GET_TRAINING_CATEGORY_FAIL:
            return {
                ...state,
                errorCode: action.payload.code,
                errorMsg: action.payload.message,
            }
        default:
            return state;
    }
}
