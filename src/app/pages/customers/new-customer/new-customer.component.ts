import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'tl-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    contactName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    address: new FormControl(''),
    noOfUsers: new FormControl(''),
  });
  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  closeModal() {
    this.activeModal.close();
  }

  createCustomer() {
    console.log("Login Payload", this.form.value);
    this.closeModal();
    // this.store.dispatch(new ActionSignIn(this.form.value));
  }

}
