import { UserListContract } from './user-list-contract';
import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  constructor(private apiConnector: ApiConnectorService) { }

  getUserList(): Observable<UserListContract> {
    return this.apiConnector.get('/api/user/getall', {}).pipe(
      map((resp: UserListContract) => resp)
    )
  }
}
