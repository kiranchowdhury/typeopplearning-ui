import { ProfileContract } from './profile-contract';
import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private apiConnectore: ApiConnectorService) { }

    getProfileDetails(): Observable<ProfileContract> {
      return this.apiConnectore.get('/api/profile/details', {}).pipe(
        map((resp: ProfileContract) => resp)
      )
    }
}
