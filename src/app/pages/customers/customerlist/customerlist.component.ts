import { Component, OnInit, Input, ViewChildren, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorCustomers, GetCustomerAction } from '../customers.reducer';
import { CustomersState, Customer } from '../customers-state';
import { GridOptions } from 'ag-grid';



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

  constructor(private store: Store<AppState>) { 
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
    };  
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.customers = custState.customers;
        console.log("CUSTOMERS", this.customers);
        params.api.setRowData(custState.customers);
      }
    )
  }

  ngOnInit() {
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.customers = custState.customers;
        console.log("CUSTOMERS", this.customers);
      }
    )
  }

  onRemoveCustomer(customer: Customer) {
    this.removeCustomerEvent.emit(customer);
  }

  trackChange() {
    console.log('Name Element Ref', this.nameElement);
  }
}
