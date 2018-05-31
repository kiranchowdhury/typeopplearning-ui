import { Action } from "@ngrx/store";
import { TrainingContract, EquipmentTypeRes, EquipmentTypeContract } from "./training-contract";
import { ErrorResponse } from "../../@core/error/error-response";
import { GetUserListAction } from "../user-list/user-list-reducer";
import { AppState } from "../../@models/app-state";
import { TrainingState } from "./training-state";

export enum TrainingActionTypes {
  GET_EQUIPMENT_LIST = "Get Equipment List",
  GET_EQUIPMENT_LIST_SUCCESS = "Get Equipment List Success",
  GET_EQUIPMENT_LIST_FAILED = "Get Equipment List Failed",
  GET_EQUIPMENT_TYPE_LIST = 'Get Equipment Type List',
  GET_EQUIPMENT_TYPE_LIST_SUCCESS = 'Get Equipment Type List Success',
  GET_EQUIPMENT_TYPE_LIST_FAIL = 'Get Equipment Type List Fail',
}

export class GetEquipmentListAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_LIST;
  constructor() {}
}

export class GetEquipmentListSuccessAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_LIST_SUCCESS;
  constructor(public payload: TrainingContract) {}
}

export class GetEquipmentListFailedAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_LIST_FAILED;
  constructor(public payload: ErrorResponse) {}
}
export class GetEquipmentTypeListAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST;
  constructor(public payload: EquipmentTypeRes) {}
}

export class GetEquipmentTypeListSuccessAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_SUCCESS;
  constructor(public payload: EquipmentTypeContract) {}
}

export class GetEquipmentTypeListFailAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL;
  constructor(public payload: ErrorResponse) {}
}


export type TrainingActions = GetEquipmentListAction |
                              GetEquipmentListSuccessAction |
                              GetEquipmentListFailedAction | 
                              GetEquipmentTypeListAction | 
                              GetEquipmentTypeListSuccessAction | GetEquipmentTypeListFailAction

export const initialTrainingState = {
  errorCode: '',
  errorMsg: '',
  loading: true,
  loadingMsg: 'Loading Equipments',
  equipmentList: [],
  count: 0,
  currentPage: 1
}

export const selectorTraining = (state: AppState) => state.training.trainingState || initialTrainingState;

export function trainingReducer(
  state: TrainingState = initialTrainingState,
  action: TrainingActions
): TrainingState {
  switch(action.type){
    case TrainingActionTypes.GET_EQUIPMENT_LIST :
    return {
      ...state,
      loading: true,
      loadingMsg: 'Loading Equipments'
    }
    case TrainingActionTypes.GET_EQUIPMENT_LIST_SUCCESS :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      equipmentList: action.payload.equipmentList,
      count: action.payload.count
    }
    case TrainingActionTypes.GET_EQUIPMENT_LIST_FAILED :
    return {
      ...state,
      loading: false,
      loadingMsg: '',
      errorCode: action.payload.code,
      errorMsg: action.payload.message
    }

    case TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST:
    console.log('=========11==on retreiving====');
        return {
            ...state,
            loading: true,
            loadingMsg: 'Retreiving equipment types...'
        }
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_SUCCESS:
    console.log('===========on equipment type success====');
    console.log(action.payload);
    console.log(action.payload.equipmentType);
        return {
            ...state,
            equipmentType: action.payload.equipmentType,
            count: action.payload.equipmentType.length,
            loading: false,
            loadingMsg: '',
        }
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }

    default:
    return state;

  }
}
