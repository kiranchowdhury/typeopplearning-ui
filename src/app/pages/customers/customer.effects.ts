import { Injectable } from "@angular/core";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { CustomersService } from "./customers.service";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable'
import { CustomersActionTypes, GetCustomerAction, GetCustomerSuccessAction, GetCustomerFailAction } from "./customers.reducer";
import { switchMap, map } from "rxjs/operators";
import { GetCustomersResponse } from "./customer-contracts";

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
}