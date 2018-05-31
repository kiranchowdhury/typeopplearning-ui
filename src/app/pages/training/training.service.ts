import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { Observable } from 'rxjs/internal/Observable';
import { TrainingContract , EquipmentTypeRes, EquipmentTypeContract} from './training-contract';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor(private apiConnector: ApiConnectorService) { }

  getEquipmentList(): Observable<TrainingContract> {
    return this.apiConnector.get('/api/training/equipment', {}).pipe(
      map((response: TrainingContract) => response)
    )
  }

  getEquipmentTypesList(payload: EquipmentTypeRes): Observable<EquipmentTypeContract> {
    console.log('==========in equipment Type service========');
    return this.apiConnector.get('/api/training/equipment/type', payload).pipe(
      map((resp: EquipmentTypeContract) => resp)
    )
  }

}
