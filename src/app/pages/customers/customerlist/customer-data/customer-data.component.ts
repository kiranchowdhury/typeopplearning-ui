import { Component, OnInit } from '@angular/core';
import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { GetCustomerDetailAction} from './../../customers.reducer';

@Component({
  selector: 'tl-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.scss']
})
export class CustomerDataComponent implements OnInit {
  pathHashArray : string[];
  breadcrumbs = [];
  selectedCustomerName : string;
  form : FormGroup;
  mode: string  = 'view';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

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
        this.selectedCustomerName = this.pathHashArray[i].split("-").join(" ");
        active=true;
      }
      this.breadcrumbs.push({name: this.pathHashArray[i],
      link: link,
      active: active,})
    }

    this.form = new FormGroup({
      customerName: new FormControl(this.selectedCustomerName),
      
    });

    this.store.dispatch(new GetCustomerDetailAction(this.form.value));
    
  }

  toggleMode() {
    this.mode = this.mode === 'view' ? 'edit' : 'view';
  }

}
