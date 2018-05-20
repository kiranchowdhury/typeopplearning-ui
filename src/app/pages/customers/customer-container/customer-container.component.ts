import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorCustomers, GetCustomerAction } from '../customers.reducer';
import { CustomersState, Customer } from '../customers-state';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCustomerComponent } from '../new-customer/new-customer.component';

@Component({
  selector: 'tl-customer-container',
  templateUrl: './customer-container.component.html',
  styleUrls: ['./customer-container.component.scss']
})
export class CustomerContainerComponent implements OnInit {
  loading: boolean = false;
  loadingMsg: string = '';
  customers: Customer[];
  mode: string  = 'view';
  constructor(private store: Store<AppState>,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.loading = custState.loading;
        this.loadingMsg = custState.loadingMsg;
        this.customers = custState.customers;
        // console.log("CUSTOMERS", this.customers);
      }
    )

    this.store.dispatch(new GetCustomerAction());
  }


  toggleMode() {
    this.mode = this.mode === 'view' ? 'edit' : 'view';
  }

  openNewCustomerDialog() {
    const activeModal = this.modalService.open(NewCustomerComponent, {});
  }

}
