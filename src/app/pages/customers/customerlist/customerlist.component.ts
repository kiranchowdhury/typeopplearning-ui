import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorCustomers, GetCustomerAction } from '../customers.reducer';
import { CustomersState, Customer } from '../customers-state';



@Component({
  selector: 'tl-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit {
  customers: Customer[];
  @Input() mode: string;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(selectorCustomers).subscribe(
      (custState: CustomersState) => {
        this.customers = custState.customers;
        console.log("CUSTOMERS", this.customers);
      }
    )
  }
}
