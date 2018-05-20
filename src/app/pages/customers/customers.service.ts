import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { GetCustomersResponse, CreateCustomerResponse, CreateCustomerRequest } from './customer-contracts';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private apiConnector: ApiConnectorService) { }

  getCustomers(): Observable<GetCustomersResponse> {
    return this.apiConnector.get('/api/customers/getall', {}).pipe(
      map((resp: GetCustomersResponse) => resp)
    )
  }

  createCustomer(payload: CreateCustomerRequest): Observable<CreateCustomerResponse> {
    console.log(payload);
    return this.apiConnector.post('/api/customers/create', payload).pipe(
      map((resp: CreateCustomerResponse) => resp)
    )
  }

  removeCustomer(payload: CreateCustomerRequest): Observable<CreateCustomerResponse> {
    return this.apiConnector.post('/api/customers/delete', payload).pipe(
      map((resp: CreateCustomerResponse) => resp)
    )
  }
}
