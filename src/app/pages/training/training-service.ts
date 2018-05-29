import { EquipmentContract } from './training-contract';
import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private apiConnectore: ApiConnectorService) { }

  getEquipmentCatList(): Observable<EquipmentContract> {
    console.log('==========in service========');
    return this.apiConnectore.get('/api/training/equipment', {}).pipe(
      map((resp: EquipmentContract) => resp)
    )
  }
}
