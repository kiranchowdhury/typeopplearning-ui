import { Component, OnInit, Input, ViewChildren, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorCustomers, GetCustomerAction } from '../customers.reducer';
import { CustomersState, Customer } from '../customers-state';
import { GridOptions } from 'ag-grid';
import { Sort} from '@angular/material/sort'
import { Pipe, PipeTransform } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'tl-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})



export class CustomerlistComponent implements OnInit {

  
  closeImg = require('../../../../assets/ic-close-edit-view.svg');
  customers: Customer[];
  @Input() mode: string;
  @Output() removeCustomerEvent: EventEmitter<Customer> = new EventEmitter();
  
  @ViewChild('nameedit') nameElement: ElementRef;
  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColumnDef;
  gridoptions;
  pathHsh :string;
  //paginationPageSize : number;
  sortedData;
  searchStr : string = "";
  filterText : string = "";
  changedCustomerList ;

  /* transform(sortedData : any[], filterText: string) {
    if (!sortedData || filterText.length==0) {
      return sortedData;
    }
    return sortedData.filter(data => data.name.toLowerCase().indexOf(filterText.toLowerCase) !== -1);
  } */

  constructor(private store: Store<AppState>) { 
    this.changedCustomerList = [];
    //this.sortedData = this.customers.slice();
    /* this.paginationPageSize = 10;
    this.gridoptions = <GridOptions>{
      rowHeight: 40,
      headerHeight: 40
    }
    this.columnDefs = [{
      headerName: "Customer Name",
      width: 400,
      field: 'name',
    }, {
      headerName: "Contact Name",
      width: 400,
      field: "contactName"
    }, {
      headerName: 'Users',
      width: 200,
      field: 'noOfUsers'
    }];
    this.defaultColumnDef = {
      editable: true,
      enableRowGroup: false,
      enablePivot: false,
      enableValue: true
    }; */  
  }

  /* onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.customers = custState.customers;
        console.log("CUSTOMERS", this.customers);
        params.api.setRowData(custState.customers);
      }
    )
  } */
  
  ngOnInit() {
    this.pathHsh = window.location.hash;
    
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.customers = custState.customers;
        console.log("CUSTOMERS", this.customers);
      }
    )
    this.sortedData = this.customers.slice(0,10);
    
  }

  onRemoveCustomer(customer: Customer) {
    this.removeCustomerEvent.emit(customer);
  }

  /* saveCustomer(event: any){
    console.log('====================event in list');
    this.saveCustomerEvent.emit(this.changedCustomerList);
  } */

  sortData(sort: Sort) {
    const data = this.sortedData;
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return this.compare(a.name, b.name, isAsc);
        case 'contactName': return this.compare(+a.contactName, +b.contactName, isAsc);
        case 'noOfUsers': return this.compare(+a.noOfUsers, +b.noOfUsers, isAsc);
        
        default: return 0;
      }
    });
  }

  compare = function(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  trackChange() {
    console.log('Name Element Ref', this.nameElement);
  }

  filterData = function(){
    console.log(this.filterText);
    this.filterText = this.searchStr;
  }

  pageChanged(event: PageChangedEvent):void{
    console.log(event);
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.sortedData = this.customers.slice(startItem, endItem); 
  }

  getChangedId = function(customer){
    //console.log(customer);
    //console.log("size of changed customerlist"+this.changedCustomerList.length);
    var flag = false;
    if(this.changedCustomerList.length>0){
      flag = false;
      this.changedCustomerList.forEach((item, index) => {
         if(customer.id === item.id){
          flag = true;
          //console.log(this.changedCustomerList);
        }
      });
      if(!flag){
        this.changedCustomerList.push(customer);
      }
    }else{
      this.changedCustomerList.push(customer);
    }
   console.log(this.changedCustomerList);

  }
}
