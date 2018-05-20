import { Action } from "@ngrx/store";
import { GetCustomersResponse, CreateCustomerRequest, CreateCustomerResponse } from "./customer-contracts";
import { ErrorResponse } from "../../@core/error/error-response";
import { CustomersState, Customer } from "./customers-state";
import { AppState } from "../../@models/app-state";

export enum CustomersActionTypes {
    GET_CUSTOMERS = 'Get Customers',
    GET_CUSTOMERS_SUCCESS = 'Get Customers Success',
    GET_CUSTOMERS_FAIL = 'Get Customers Fail',
    CREATE_CUSTOMER = 'Create Customer',
    CREATE_CUSTOMER_SUCCESS = 'Create Customer Success',
    CREATE_CUSTOMER_FAIL = 'Create Customer Fail',
    REMOVE_CUSTOMER = 'Remove Customer',
    REMOVE_CUSTOMER_SUCCESS = 'Remove Customer Success',
    REMOVE_CUSTOMER_FAIL = 'Remove Customer Fail'
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

export class CreateCustomerAction implements Action {
    readonly type = CustomersActionTypes.CREATE_CUSTOMER;
    constructor(public payload: CreateCustomerRequest) {}
}

export class CreateCustomerSuccessAction implements Action {
    readonly type = CustomersActionTypes.CREATE_CUSTOMER_SUCCESS;
    constructor(public payload: CreateCustomerResponse) {}
}

export class CreateCustomerFailAction implements Action {
    readonly type = CustomersActionTypes.CREATE_CUSTOMER_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export class RemoveCustomerAction implements Action {
    readonly type = CustomersActionTypes.REMOVE_CUSTOMER;
    constructor(public payload: CreateCustomerRequest) {}
}

export class RemoveCustomerSuccessAction implements Action {
    readonly type = CustomersActionTypes.REMOVE_CUSTOMER_SUCCESS;
    constructor(public payload: CreateCustomerResponse) {}
}

export class RemoveCustomerFailAction implements Action {
    readonly type = CustomersActionTypes.REMOVE_CUSTOMER_FAIL;
    constructor(public payload: ErrorResponse) {}
}

export type CustomersActions = GetCustomerAction |
                               GetCustomerSuccessAction |
                               GetCustomerFailAction |
                               CreateCustomerAction |
                               CreateCustomerSuccessAction |
                               CreateCustomerFailAction |
                               RemoveCustomerAction |
                               RemoveCustomerSuccessAction |
                               RemoveCustomerFailAction
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
                isError: true,
                code: action.payload.code,
                message: action.payload.message,
            }
        case CustomersActionTypes.CREATE_CUSTOMER: {
            console.log('Customer Payload####', action.payload)
            return {
                ...state,
                loading: true,
                loadingMsg: 'Creating Customer...'
            }
        }
        case CustomersActionTypes.CREATE_CUSTOMER_SUCCESS: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                loading: false,
                loadingMsg: '',
                customers: patchItems(customers, action.payload.customer),
                count: count + 1,
                message: 'Customer created sucessfully'
            }
        }
        case CustomersActionTypes.CREATE_CUSTOMER_FAIL: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                isError: true,
                loading: false,
                message: action.payload.message,
                code: action.payload.code
            }
        }
        case CustomersActionTypes.REMOVE_CUSTOMER: {
            console.log('Remove Customer Payload####', action.payload)
            return {
                ...state,
                loading: true,
                loadingMsg: 'Deleting Customer...'
            }
        }
        case CustomersActionTypes.REMOVE_CUSTOMER_SUCCESS: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                loading: false,
                loadingMsg: '',
                customers: removeItem(customers, action.payload.customer),
                count: count + 1,
                message: 'Customer sucessfully deleted.'
            }
        }
        case CustomersActionTypes.REMOVE_CUSTOMER_FAIL: {
            let customers = state.customers;
            let count = state.count;
            return {
                ...state,
                isError: true,
                loading: false,
                message: action.payload.message,
                code: action.payload.code
            }
        }               

        default:
            return state;
    }
}

function patchItems(items: any[], item: any): any[] {
    items.push(item);
    return items;
}

function removeItem(items: any[], item: any): any[] {
    items = items.filter((i) => (i.id != item.id));
    return items;
}
