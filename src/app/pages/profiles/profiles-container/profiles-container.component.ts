import { Component, OnInit, Input } from '@angular/core';
import { LoginState } from './../../../@core/login/login.state';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';
import { selectorLogin } from './../../../@core/login/login.reducer';
import { ProfileState } from '../profile-state';
import { GetProfileAction, selectorProfile } from '../profile-reducer';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'tl-profiles-container',
  templateUrl: './profiles-container.component.html',
  styleUrls: ['./profiles-container.component.scss']
})
export class ProfilesContainerComponent implements OnInit {

  currentUser: LoginState;
  profileState: ProfileState;

  constructor(   private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(selectorLogin).subscribe(
      (loginState: LoginState) => {
        this.currentUser = loginState;
        console.log('role: ',this.currentUser.role);
      }
    )

    this.store.dispatch( new GetProfileAction() );

    this.store.select(selectorProfile).subscribe(
      (profileState: ProfileState) => {
        this.profileState = profileState;
      }
    )
  }

}
