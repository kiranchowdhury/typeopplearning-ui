import { selectorTrainingCat } from './../subcriptions-reducer';
import { AppState } from './../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { TrainingCat, TrainingCatState } from '../subscriptions-state';

@Component({
  selector: 'tl-purchase-training',
  templateUrl: './purchase-training.component.html',
  styleUrls: ['./purchase-training.component.scss']
})
export class PurchaseTrainingComponent implements OnInit {
  trainingCategory: TrainingCat[];
  pathHashArray : string[];
  breadcrumbs = [];
  selectedEquipment : string;
  urlHash :string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.urlHash = window.location.hash;
    var pathHash = window.location.hash;
    console.log(pathHash);
    this.pathHashArray = pathHash.split("/");
    console.log(this.pathHashArray);
    var link = "";
    for(var i=2; i<this.pathHashArray.length; i++){
      
      var active =false;
      if(i==2){
        link = "/"+this.pathHashArray[i-1]+"/"+this.pathHashArray[i];
      }else{
        link= link+"/"+this.pathHashArray[i];
      }

      if(i==this.pathHashArray.length-1){
        this.selectedEquipment = this.pathHashArray[i].split("-").join(" ");
        active=true;
      }
      this.breadcrumbs.push({name: this.pathHashArray[i],
      link: link,
      active: active,})
    }
    this.store.select(selectorTrainingCat).subscribe(
      (trainingCatState: TrainingCatState) => {
        this.trainingCategory = trainingCatState.trainingCat;
        
      }
    )
    
  }

}
