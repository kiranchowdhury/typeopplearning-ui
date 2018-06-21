import { TrainingCatState } from './subscriptions-state';
import { TrainingCatContract, EquipmentTypeRes, EquipmentTypeContract, EquipmentTypeIdRequest, 
    EquipmentDataContract, InvoiceContract } from './subscriptions-contract';
import { Action } from "@ngrx/store";
import { ErrorResponse } from "../../@core/error/error-response";
import { AppState } from "../../@models/app-state";

export enum TrainingCategoryActionTypes {
    GET_TRAINING_CATEGORY = 'Get Training Category',
    GET_TRAINING_CATEGORY_SUCCESS = 'Get Training Category Success',
    GET_TRAINING_CATEGORY_FAIL = 'Get Training Category Fail',

    GET_EQUIPMENT_TYPE_LIST = 'Get Equipment Type List',
    GET_EQUIPMENT_TYPE_LIST_SUCCESS = 'Get Equipment Type List Success',
    GET_EQUIPMENT_TYPE_LIST_FAIL = 'Get Equipment Type List Fail',

    GET_EQUIPMENT_TYPE_DATA_LIST = 'Get Equipment Type Data List',
    GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS = 'Get Equipment Type Data List Success',
    GET_EQUIPMENT_TYPE_DATA_LIST_FAIL = 'Get Equipment Type Data List Fail',

    GET_INVOICE_LIST = 'Get Invoice List',
    GET_INVOICE_LIST_SUCCESS = 'Get Invoice List Success',
    GET_INVOICE_LIST_FAIL = 'Get Invoice List Fail',
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

export class GetEquipmentTypeListAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST;
    constructor(public payload: EquipmentTypeRes) {}
  }
  
  export class GetEquipmentTypeListSuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST_SUCCESS;
    constructor(public payload: EquipmentTypeContract) {}
  }
  
  export class GetEquipmentTypeListFailAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL;
    constructor(public payload: ErrorResponse) {}
  }
  
  export class GetEquipmentTypeDataListAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST;
    constructor(public payload: EquipmentTypeIdRequest) {}
  }
  
  export class GetEquipmentTypeDataListSuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS;
    constructor(public payload: EquipmentDataContract) {}
  }
  
  export class GetEquipmentTypeDataListFailAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_FAIL;
    constructor(public payload: ErrorResponse) {}
  }

  export class GetInvoiceListAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_INVOICE_LIST;
    constructor() {}
  }
  
  export class GetInvoiceListSuccessAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_INVOICE_LIST_SUCCESS;
    constructor(public payload: InvoiceContract) {}
  }
  
  export class GetInvoiceListFailAction implements Action {
    readonly type = TrainingCategoryActionTypes.GET_INVOICE_LIST_FAIL;
    constructor(public payload: ErrorResponse) {}
  }
  

export type TrainingCatActions = GetTrainingCategoryAction | 
                    GetTrainingCategorySuccessAction | 
                    GetTrainingCategoryFailAction |
                    GetEquipmentTypeListAction | 
                    GetEquipmentTypeListSuccessAction | 
                    GetEquipmentTypeListFailAction |
                    GetEquipmentTypeDataListAction |
                    GetEquipmentTypeDataListSuccessAction |
                    GetEquipmentTypeDataListFailAction | GetInvoiceListAction |
                    GetInvoiceListSuccessAction | GetInvoiceListFailAction

export const initialTrainingCatState: TrainingCatState = {
    loading: false,
    loadingMsg: '',
    trainingCat: [],
    equipmentType : [],
    equipmentData : [],
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
        
        
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST:
    //console.log('=========11==on retreiving====');
        return {
            ...state,
            loading: true,
            loadingMsg: 'Retreiving equipment types...'
        }
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST_SUCCESS:
      return {
            ...state,
            equipmentType: action.payload.equipmentType,
            count: action.payload.equipmentType.length,
            loading: false,
            loadingMsg: '',
        }
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }

    //Get Equipment Data list on Equipment Type Id
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST:
        return {
            ...state,
            loading: true,
            loadingMsg: 'Retreiving equipment Data list types...'
        }
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_DATA_LIST_SUCCESS:
    
        return {
            ...state,
            equipmentData: action.payload.equipmentData,
            count: action.payload.equipmentData.length,
            loading: false,
            loadingMsg: '',
        }
    case TrainingCategoryActionTypes.GET_EQUIPMENT_TYPE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }
    case TrainingCategoryActionTypes.GET_INVOICE_LIST:
    return {
        ...state,
        loading: true,
        loadingMsg: 'Retreiving training libraries...'
    }
    case TrainingCategoryActionTypes.GET_INVOICE_LIST_SUCCESS:
    console.log('=================on success=====');
        return {
            ...state,
            invoiceList: action.payload.invoiceList,
            count: action.payload.invoiceList.length,
            loading: false,
            loadingMsg: '',
        }
    case TrainingCategoryActionTypes.GET_INVOICE_LIST_FAIL:
        return {
            ...state,
            errorCode: action.payload.code,
            errorMsg: action.payload.message,
        }
    
        default:
            return state;
    }
}
