import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { GetCustomersResponse } from './customer-contracts';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private apiConnectore: ApiConnectorService) { }

  getCustomers(): Observable<GetCustomersResponse> {
    return this.apiConnectore.get('/api/customers/getall', {}).pipe(
      map((resp: GetCustomersResponse) => resp)
    )
  }
}
