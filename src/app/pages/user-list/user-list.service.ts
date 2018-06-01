import { UserListContract, CreateUser, CreateUserResponse, RemoveUser, RemoveUserResponse } from './user-list-contract';
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

  createUser(payload: CreateUser): Observable<CreateUserResponse> {
    return this.apiConnector.post('/api/user/create', payload).pipe(
      map((response: CreateUserResponse) => response)
    )
  }

  removeUser(payload: RemoveUser): Observable<RemoveUserResponse> {
    return this.apiConnector.post('/api/user/remove', payload).pipe(
      map((result: RemoveUserResponse) => result)
    )
  }

}
