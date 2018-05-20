import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { CustomersService } from "./customers.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { CustomersActionTypes, GetCustomerAction, GetCustomerSuccessAction, GetCustomerFailAction, CreateCustomerAction, CreateCustomerSuccessAction, CreateCustomerFailAction } from "./customers.reducer";
import { switchMap, map, tap } from "rxjs/operators";
import { GetCustomersResponse, CreateCustomerResponse } from "./customer-contracts";

@Injectable()
export class CustomersEffects {
    constructor(
        private action$: Actions<Action>,
        private customerService: CustomersService,
        private router: Router,
    ) {}

    @Effect()
    getCustomers(): Observable<Action> {
        return this.action$.ofType(CustomersActionTypes.GET_CUSTOMERS).pipe(
            switchMap((action: GetCustomerAction) => 
                this.customerService.getCustomers()
                .pipe(
                    map((resp: GetCustomersResponse) => (resp.status === 1) ?
                    new GetCustomerSuccessAction(resp)
                    : new GetCustomerFailAction({code: resp.code, message: resp.message}))
                )
            )
        )
    }

    @Effect()
    createCustomer(): Observable<Action> {
        // console(act)
        return this.action$.ofType(CustomersActionTypes.CREATE_CUSTOMER).pipe(
         //   tap(() => console.log('In the effects,')),
            switchMap((action: CreateCustomerAction) =>                
                this.customerService.createCustomer(action.payload)
                .pipe(
                    tap((resp: CreateCustomerResponse) => console.log('In the effects payload---', action.payload)),
                    map((resp: CreateCustomerResponse) => (resp.status === 1)?
                    new CreateCustomerSuccessAction(resp)
                    : new CreateCustomerFailAction({code: resp.code, message: resp.message}))
                ))
        )
    }

}