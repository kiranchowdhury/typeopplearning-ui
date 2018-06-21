import { TrainingCatContract, EquipmentTypeRes, EquipmentTypeContract, EquipmentTypeIdRequest, 
  EquipmentDataContract, InvoiceContract} from './subscriptions-contract';
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

  getEquipmentTypesList(payload: EquipmentTypeRes): Observable<EquipmentTypeContract> {
    return this.apiConnectore.get('/api/training/equipment/type', payload).pipe(
      map((resp: EquipmentTypeContract) => resp)
    )
  }

  getEquipmentListOnType(payload: EquipmentTypeIdRequest): Observable<EquipmentDataContract> {
    return this.apiConnectore.get('/api/training/equipment/list', payload).pipe(
      map((resp: EquipmentDataContract) => resp)
    )
  }

  getInvoiceList(): Observable<InvoiceContract> {
    return this.apiConnectore.get('/api/invoice/list', {}).pipe(
      map((resp: InvoiceContract) => resp)
    )
  }
}
