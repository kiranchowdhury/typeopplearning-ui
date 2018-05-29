import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';
import { Store } from '@ngrx/store';
import { AppState } from '../@models/app-state';
import { selectorLogin } from '../@core/login/login.reducer';
import { LoginState } from '../@core/login/login.state';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout [authenticated]="authenticated">
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {
  authenticated = false;

  menu = MENU_ITEMS;
  constructor(private store: Store<AppState>) {}
  ngOnInit() {
    this.store.select(selectorLogin)
    .subscribe((loginState: LoginState) => {
      console.log('Login State ', loginState);
      this.authenticated = loginState.authenticated;
    })
  }
}
