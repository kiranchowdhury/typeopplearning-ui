import { Component, OnInit} from '@angular/core';
import { AppState} from '../../../../../@models/app-state';
import { Store } from '@ngrx/store';
import {  GetTrainingStartDataAction} from './../../../training-reducer';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tl-training-start',
  templateUrl: './training-start.component.html',
  styleUrls: ['./training-start.component.scss']
})
export class TrainingStartComponent implements OnInit {
  pathHashArray : string[];
  breadcrumbs = [];
  selectedEquipment : string;
  constructor(private store : Store<AppState>) { }
  form: FormGroup ;
  loading: boolean = false;
  loadingMsg: string = '';
  pathHash: string;

  ngOnInit() {
    var pathHash = window.location.hash;
    this.pathHashArray = pathHash.split("/");
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
    
    this.form = new FormGroup({
      equipmentId: new FormControl( this.selectedEquipment)
    });
    this.store.dispatch(new GetTrainingStartDataAction(this.form.value));
  }

}
