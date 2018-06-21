import { AppState } from './../../../../@models/app-state';
import { Store } from '@ngrx/store';
import { Component, OnInit, ViewChild, EventEmitter, ElementRef } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { selectorUserList, GetUserDetailAction} from './../../user-list-reducer';
import { UserDetailData, UserListState } from '../../user-list-state';

@Component({
  selector: 'tl-user-detail-data',
  templateUrl: './user-detail-data.component.html',
  styleUrls: ['./user-detail-data.component.scss']
})
export class UserDetailDataComponent implements OnInit {
  userData : UserDetailData;
  loading: boolean = false;
  loadingMsg: string = '';
  constructor(private store : Store<AppState>) { }

  ngOnInit() {
    this.store.select(selectorUserList).subscribe(
      (userState: UserListState) => {
        
        this.userData =userState.userDetail;
        //console.log("user detail : =======", this.userData);
      }
    )
  }

}
