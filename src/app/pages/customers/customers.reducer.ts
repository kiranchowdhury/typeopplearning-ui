import { Action } from "@ngrx/store";
import { GetCustomersResponse } from "./customer-contracts";
import { ErrorResponse } from "../../@core/error/error-response";
import { CustomersState } from "./customers-state";
import { AppState } from "../../@models/app-state";

export enum CustomersActionTypes {
    GET_CUSTOMERS = 'Get Customers',
    GET_CUSTOMERS_SUCCESS = 'Get Customers Success',
    GET_CUSTOMERS_FAIL = 'Get Customers Fail',
}

export class GetCustomerAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMERS;
    constructor() {}
}

export class GetCustomerSuccessAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMERS_SUCCESS;
    constructor(public payload: GetCustomersResponse) {}
}

export class GetCustomerFailAction implements Action {
    readonly type = CustomersActionTypes.GET_CUSTOMERS_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export type CustomersActions = GetCustomerAction | GetCustomerSuccessAction | GetCustomerFailAction

export const initialCustomerState: CustomersState = {
    loading: false,
    loadingMsg: '',
    customers: [],
    count: 0,
    currentPage: 1,
    
}

export const selectorCustomers = (state: AppState) => state.customers.custState || initialCustomerState;

export function customerReducer(
    state: CustomersState = initialCustomerState,
    action: CustomersActions
): CustomersState {
    switch (action.type) {
        case CustomersActionTypes.GET_CUSTOMERS:
            return {
                ...state,
                loading: true,
                loadingMsg: 'Retreiving customers...'
            }
        case CustomersActionTypes.GET_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customers: action.payload.customers,
                count: action.payload.customers.length,
                loading: false,
                loadingMsg: '',
            }
        case CustomersActionTypes.GET_CUSTOMERS_FAIL:
            return {
                ...state,
                errorCode: action.payload.code,
                errorMsg: action.payload.message,
            }
        default:
            return state;
    }
}
