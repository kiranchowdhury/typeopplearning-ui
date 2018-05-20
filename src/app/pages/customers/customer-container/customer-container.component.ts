import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorCustomers, GetCustomerAction, RemoveCustomerAction } from '../customers.reducer';
import { CustomersState, Customer } from '../customers-state';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewCustomerComponent } from '../new-customer/new-customer.component';
import { CreateCustomerRequest } from '../customer-contracts';

@Component({
  selector: 'tl-customer-container',
  templateUrl: './customer-container.component.html',
  styleUrls: ['./customer-container.component.scss']
})
export class CustomerContainerComponent implements OnInit {
  loading: boolean = false;
  loadingMsg: string = '';
  isError: boolean = false;
  code: string = '';
  apiMessage: string = '';
  customers: Customer[];
  mode: string  = 'view';
  tostrPayLoad;
  constructor(private store: Store<AppState>,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.loading = custState.loading;
        this.loadingMsg = custState.loadingMsg;
        this.customers = custState.customers;
        this.apiMessage = custState.message;
        this.code = custState.code;
        this.isError = custState.isError;
        // console.log("CUSTOMERS", this.customers);
        this.createTostrPayload();
      }
    )

    this.store.dispatch(new GetCustomerAction());
  }

  createTostrPayload() {
    if (this.isError) {
      this.tostrPayLoad = {level: 'E', message: this.code + ':' + this.apiMessage}
    } else {
      this.tostrPayLoad = {level: 'S', message: this.apiMessage}
    }
  }

  resetToastrPayload() {
    this.tostrPayLoad = {};
  }


  toggleMode() {
    this.mode = this.mode === 'view' ? 'edit' : 'view';
  }

  openNewCustomerDialog() {
    const activeModal = this.modalService.open(NewCustomerComponent, {});
  }

  handleRemoveCustomer(customer: CreateCustomerRequest) {
    console.log("Removing customer", customer);
    this.store.dispatch(new RemoveCustomerAction(customer))
  }

}
