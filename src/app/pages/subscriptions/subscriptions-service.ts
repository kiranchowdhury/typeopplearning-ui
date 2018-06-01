import { TrainingCatContract } from './subscriptions-contract';
import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(private apiConnectore: ApiConnectorService) { }

  getTrainingCat(): Observable<TrainingCatContract> {
    return this.apiConnectore.get('/api/subscription/training/equipment', {}).pipe(
      map((resp: TrainingCatContract) => resp)
    )
  }
}
