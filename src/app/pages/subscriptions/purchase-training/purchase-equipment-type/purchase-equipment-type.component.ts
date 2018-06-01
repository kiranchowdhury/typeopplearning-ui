import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-purchase-equipment-type',
  templateUrl: './purchase-equipment-type.component.html',
  styleUrls: ['./purchase-equipment-type.component.scss']
})
export class PurchaseEquipmentTypeComponent implements OnInit {

  pathHashArray : string[];
  breadcrumbs = [];
  selectedEquipment : string;

  constructor() { }

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
        this.selectedEquipment = this.pathHashArray[i].split("-").join(" ");
        active=true;
      }
      this.breadcrumbs.push({name: this.pathHashArray[i],
      link: link,
      active: active,})
    }
  }

}
