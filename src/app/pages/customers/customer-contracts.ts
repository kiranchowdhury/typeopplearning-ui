import { Customer } from "./customers-state";

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
