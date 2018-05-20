import { TrainingLibraryContract } from './training-library-contract';
import { Injectable } from '@angular/core';
import { ApiConnectorService } from '../../@core/api-handlers/api-connector.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class TrainingLibraryService {

  constructor(private apiConnectore: ApiConnectorService) { }

  getTrainingLibrary(): Observable<TrainingLibraryContract> {
    return this.apiConnectore.get('/api/training-library/getall', {}).pipe(
      map((resp: TrainingLibraryContract) => resp)
    )
  }
}
