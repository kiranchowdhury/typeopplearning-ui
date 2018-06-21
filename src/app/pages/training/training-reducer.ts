import { Action } from "@ngrx/store";
import { TrainingContract, EquipmentTypeRes, EquipmentTypeContract,
  EquipmentTypeIdRequest, EquipmentDataContract, EquipmentDetailReq, EquipmentDetailContract } from "./training-contract";
import { ErrorResponse } from "../../@core/error/error-response";
//import { GetUserListAction } from "../user-list/user-list-reducer";
import { AppState } from "../../@models/app-state";
import { TrainingState } from "./training-state";

export enum TrainingActionTypes {
  GET_EQUIPMENT_LIST = "Get Equipment List",
  GET_EQUIPMENT_LIST_SUCCESS = "Get Equipment List Success",
  GET_EQUIPMENT_LIST_FAILED = "Get Equipment List Failed",

  GET_EQUIPMENT_TYPE_LIST = 'Get Equipment Type List',
  GET_EQUIPMENT_TYPE_LIST_SUCCESS = 'Get Equipment Type List Success',
  GET_EQUIPMENT_TYPE_LIST_FAIL = 'Get Equipment Type List Fail',

  GET_EQUIPMENT_TYPE_DATA_LIST = 'Get Equipment Type Data List',
  GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS = 'Get Equipment Type Data List Success',
  GET_EQUIPMENT_TYPE_DATA_LIST_FAIL = 'Get Equipment Type Data List Fail',

  GET_TRAINING_START_DATA = 'Get Training Start Data',
  GET_TRAINING_START_DATA_SUCCESS = 'Get Training Start Data Success',
  GET_TRAINING_START_DATA_FAIL = 'Get Training Start Data Fail',

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

export class GetEquipmentTypeDataListAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST;
  constructor(public payload: EquipmentTypeIdRequest) {}
}

export class GetEquipmentTypeDataListSuccessAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS;
  constructor(public payload: EquipmentDataContract) {}
}

export class GetEquipmentTypeDataListFailAction implements Action {
  readonly type = TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_FAIL;
  constructor(public payload: ErrorResponse) {}
}

export class GetTrainingStartDataAction implements Action {
  readonly type = TrainingActionTypes.GET_TRAINING_START_DATA;
  constructor(public payload: EquipmentDetailReq) {}
}

export class GetTrainingStartDataSuccessAction implements Action {
  readonly type = TrainingActionTypes.GET_TRAINING_START_DATA_SUCCESS;
  constructor(public payload: EquipmentDetailContract) {}
}

export class GetTrainingStartDataFailAction implements Action {
  readonly type = TrainingActionTypes.GET_TRAINING_START_DATA_FAIL;
  constructor(public payload: ErrorResponse) {}
}


export type TrainingActions = GetEquipmentListAction |
                              GetEquipmentListSuccessAction |
                              GetEquipmentListFailedAction | 
                              GetEquipmentTypeListAction | 
                              GetEquipmentTypeListSuccessAction | 
                              GetEquipmentTypeListFailAction |
                              GetEquipmentTypeDataListAction |
                              GetEquipmentTypeDataListSuccessAction |
                              GetEquipmentTypeDataListFailAction |
                              GetTrainingStartDataAction | 
                              GetTrainingStartDataSuccessAction |
                              GetTrainingStartDataFailAction

export const initialTrainingState : TrainingState= {
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
      loadingMsg: 'Loading Equipments Category'
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
    //console.log('=========11==on retreiving====');
        return {
            ...state,
            loading: true,
            loadingMsg: 'Retreiving equipment types...'
        }
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_SUCCESS:
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

    //Get Equipment Data list on Equipment Type Id
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST:
        return {
            ...state,
            loading: true,
            loadingMsg: 'Retreiving equipment Data list types...'
        }
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS:
    
        return {
            ...state,
            equipmentData: action.payload.equipmentData,
            count: action.payload.equipmentData.length,
            loading: false,
            loadingMsg: '',
        }
    case TrainingActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }

    case TrainingActionTypes.GET_TRAINING_START_DATA:
    return {
        ...state,
        loading: true,
        loadingMsg: 'Retreiving training Data list ...'
    }
    case TrainingActionTypes.GET_TRAINING_START_DATA_SUCCESS:
    
        return {
            ...state,
            equipmentDetail: action.payload.equipmentDetail,
            count: action.payload.equipmentDetail.length,
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
