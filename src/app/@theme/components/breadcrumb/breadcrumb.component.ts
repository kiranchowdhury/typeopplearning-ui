import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tl-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs = [{
    name: 'Customers',
    link: '/pages/customers',
    active: false,
  }, {
    name: 'Customer-1',
    link: '/pages/howto',
    active: true,
  }]
  constructor() { }

  ngOnInit() {
  }

}
