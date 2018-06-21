import { Customer, CustomerDetail, RemainingBudget, BudgetDetail, 
    CustomerUserList} from "./customers-state";

export interface CustomerContracts {
    
    
}

/** Get Customers Contract */
export interface GetCustomersRequest {

}
export interface GetCustomersResponse {
    status: number;
    code: string;
    message: string;
    count: number;
    customers: Customer[];
}

export interface CreateCustomerRequest {
    customer: Customer
}

export interface CreateCustomerResponse {
    status: number;
    code: string;
    message: string;
    customer: Customer;
}

export interface GetCustomerDetailReq{
    customerName : string;
}

export interface CustomerDetailContract{
    status: number;
    code: string;
    message: string;
    customerDetail: CustomerDetail;
}

export interface CustomerBudgetReq{
    customerName : string;
}

export interface CustomerBudgetDetailContract { 
    status: number;
    code: string;
    message: string;
    remainingBudget : RemainingBudget;
    budgetDetail : BudgetDetail[];
}

export interface CustomerUsersReq{
    customerName : string;
}

export interface CustomerUserListContract {
    status: number;
    code: string;
    message: string;
    userList : CustomerUserList[];
    count : number;
}

export interface DetailUpdateReq{
    changedCustomerList : Customer[];
}
