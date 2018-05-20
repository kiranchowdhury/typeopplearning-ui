export interface CustomersState {
    code?: string;
    message?: string;
    isError?: boolean;
    loading?: boolean;
    loadingMsg?: string;
    customers: Customer[];
    count: number;
    currentPage: number;

}

export interface Customer {
    id: string;
    name: string;
    contactName: string;
    noOfUsers: number;
    email: string;
    phone: string;
    address: string;
    remainingBudget?: number;
    payments?: Payment[];    
}

export interface Payment {
    transactionId: string;
    description: string;
    type: {code: string, name: string};
    date: Date;
    amount: number;

}