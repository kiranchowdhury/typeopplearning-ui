import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { TrainingLibrary, TrainingLibraryState } from './../training-library-state';
import { Component, OnInit } from '@angular/core';
import { selectorTrainingLibrary, GetTrainingLibraryAction } from '../training-library-reducer';

@Component({
  selector: 'tl-training-lib-container',
  templateUrl: './training-lib-container.component.html',
  styleUrls: ['./training-lib-container.component.scss']
})
export class TrainingLibContainerComponent implements OnInit {
  loading: boolean = false;
  loadingMsg: string = '';
  trainingLibrary: TrainingLibrary[];
  mode: string  = 'view';
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // this.store.select(selectorTrainingLibrary).subscribe(
    //   (tlState: TrainingLibraryState) => {
    //     this.loading = tlState.loading;
    //     this.loadingMsg = tlState.loadingMsg;
    //     this.trainingLibrary = tlState.trainingLibraries;
    //     console.log("trainingLibrary", this.trainingLibrary);
    //   }
    // )

    this.store.dispatch(new GetTrainingLibraryAction());
  }


  toggleMode() {
    this.mode = this.mode === 'view' ? 'edit' : 'view';
  }

}
