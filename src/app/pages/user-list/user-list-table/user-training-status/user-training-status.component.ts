import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { selectorUserList, GetTrainingStatusAction} from './../../user-list-reducer';
import { UserTrainingStatus, UserListState } from '../../user-list-state';

@Component({
  selector: 'tl-user-training-status',
  templateUrl: './user-training-status.component.html',
  styleUrls: ['./user-training-status.component.scss']
})
export class UserTrainingStatusComponent implements OnInit {

  gridApi;
  gridColumnApi;
  columnDefs;
  defaultColumnDef;
  gridoptions;
  userTrnData : UserTrainingStatus;
  loading: boolean = false;
  loadingMsg: string = '';
  constructor(private store : Store<AppState>) { 
    this.gridoptions = <GridOptions>{
      rowHeight: 40,
      headerHeight: 40
    }
    this.columnDefs = [{
      headerName: "Invoice Number",
      width: 200,
      field: 'invoiceNumber',
    }, {
      headerName: "Invoice Date",
      width: 200,
      field: "invoiceDate"
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
    this.store.select(selectorUserList).subscribe(
      (userState: UserListState) => {
        
        this.userTrnData =userState.userTrainingStatus;
        console.log("user trn : =======", this.userTrnData);
      }
    )
    
  }
  ngOnInit() {
    this.store.select(selectorUserList).subscribe(
      (userState: UserListState) => {
        
        this.userTrnData =userState.userTrainingStatus;
       
      }
    )
  }

}
