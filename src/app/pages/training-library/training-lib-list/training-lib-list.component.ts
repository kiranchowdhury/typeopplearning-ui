import { selectorTrainingLibrary } from './../training-library-reducer';
import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { TrainingLibrary, TrainingLibraryState } from '../training-library-state';

@Component({
  selector: 'tl-training-lib-list',
  templateUrl: './training-lib-list.component.html',
  styleUrls: ['./training-lib-list.component.scss']
})
export class TrainingLibListComponent implements OnInit {
  trainingLibraries: TrainingLibrary[];
  @Input() mode: string;
  @Output() removeCustomerEvent: EventEmitter<TrainingLibrary> = new EventEmitter();
  @ViewChild('nameedit') nameElement: ElementRef;
  gridColumnApi;
  columnDefs;
  defaultColumnDef;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.store.select(selectorTrainingLibrary).subscribe(
      (trnLibState: TrainingLibraryState) => {
        this.trainingLibraries = trnLibState.trainingLibraries;
        console.log("trainingLibrarieslist", this.trainingLibraries);
      }
    )
  }

  onRemoveCustomer(trainingLibrary: TrainingLibrary) {
    this.removeCustomerEvent.emit(trainingLibrary);
  }

  trackChange() {
    console.log('Name Element Ref', this.nameElement);
  }
}
