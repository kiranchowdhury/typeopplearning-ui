import { EquipmentCatState } from './training-state';
import { EquipmentContract } from './training-contract';
import { Action } from "@ngrx/store";
import { ErrorResponse } from "../../@core/error/error-response";
import { AppState } from "../../@models/app-state";

export enum TrainingEquipmentActionTypes {
    GET_EQUIPMENT_LIST = 'Get Equipment List',
    GET_EQUIPMENT_LIST_SUCCESS = 'Get Equipment List Success',
    GET_EQUIPMENT_LIST_FAIL = 'Get Equipment List Fail',
}

export class GetEquipmentListAction implements Action {
    readonly type = TrainingEquipmentActionTypes.GET_EQUIPMENT_LIST;
    constructor() {}
}

export class GetEquipmentListSuccessAction implements Action {
    readonly type = TrainingEquipmentActionTypes.GET_EQUIPMENT_LIST_SUCCESS;
    constructor(public payload: EquipmentContract) {}
}

export class GetEquipmentListFailAction implements Action {
    readonly type = TrainingEquipmentActionTypes.GET_EQUIPMENT_LIST_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export type EquipmentListActions = GetEquipmentListAction | GetEquipmentListSuccessAction | GetEquipmentListFailAction

export const initialEquipmentState: EquipmentCatState = {
    loading: false,
    loadingMsg: '',
    equipmentCat: [],
    count: 0,
    currentPage: 1,

}

export const selectorEquipment = (state: AppState) => state.equipmentCat.equipmentCatState || initialEquipmentState;

export function equipmentListReducer(
    state: EquipmentCatState = initialEquipmentState,
    action: EquipmentListActions
): EquipmentCatState {
    switch (action.type) {
        case TrainingEquipmentActionTypes.GET_EQUIPMENT_LIST:
            return {
                ...state,
                loading: true,
                loadingMsg: 'Retreiving training libraries...'
            }
        case TrainingEquipmentActionTypes.GET_EQUIPMENT_LIST_SUCCESS:
        console.log('===========on success====');
        console.log(action.payload);
        console.log(action.payload.equipmentCat);
            return {
                ...state,
                equipmentCat: action.payload.equipmentCat,
                count: action.payload.equipmentCat.length,
                loading: false,
                loadingMsg: '',
            }
        case TrainingEquipmentActionTypes.GET_EQUIPMENT_LIST_FAIL:
            return {
                ...state,
                errorCode: action.payload.code,
                errorMsg: action.payload.message,
            }
        default:
            return state;
    }
}
