import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { Observable } from 'rxjs/internal/Observable';
import { TrainingContract , EquipmentTypeRes, EquipmentTypeContract, 
  EquipmentTypeIdRequest, EquipmentDataContract, EquipmentDetailReq, EquipmentDetailContract} from './training-contract';
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
    return this.apiConnector.get('/api/training/equipment/type', payload).pipe(
      map((resp: EquipmentTypeContract) => resp)
    )
  }

  getEquipmentListOnType(payload: EquipmentTypeIdRequest): Observable<EquipmentDataContract> {
    return this.apiConnector.get('/api/training/equipment/list', payload).pipe(
      map((resp: EquipmentDataContract) => resp)
    )
  }

  getTrainingStartData(payload: EquipmentDetailReq): Observable<EquipmentDetailContract> {
    return this.apiConnector.get('/api/training/start/detail', payload).pipe(
      map((resp: EquipmentDetailContract) => resp)
    )
  }

}
