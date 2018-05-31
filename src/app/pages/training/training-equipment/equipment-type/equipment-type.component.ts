import { Component, OnInit } from '@angular/core';
import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';3
import { GetEquipmentTypeListAction} from './../../training-reducer';


@Component({
  selector: 'tl-equipment-type',
  templateUrl: './equipment-type.component.html',
  styleUrls: ['./equipment-type.component.scss']
})
export class EquipmentTypeComponent implements OnInit {
  pathHashArray : string[];
  breadcrumbs = [];
  selectedEquipment : string;
  form: FormGroup ;
  loading: boolean = false;
  loadingMsg: string = '';
  constructor(private store: Store<AppState>) { }

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
      equipmentCat: new FormControl(this.selectedEquipment.split(" ").join("-")),
      
    });
    
    //console.log('=====form value======on equipment type dispatch');
    console.log('on dispatch=======');
    this.store.dispatch(new GetEquipmentTypeListAction(this.form.value));
  }

}
