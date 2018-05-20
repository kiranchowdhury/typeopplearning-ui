import { Component, Input, OnInit } from '@angular/core';
import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserService } from '../../../@core/data/users.service';
import { AnalyticsService } from '../../../@core/utils/analytics.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../../../@shared/modal/modal.component';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from '../../../@models/app-state';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() authenticated: boolean = false;

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private userService: UserService,
              private analyticsService: AnalyticsService,
              private modalService: NgbModal,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe((users: any) => this.user = users.nick);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    return false;
  }

  toggleSettings(): boolean {
    this.sidebarService.toggle(false, 'settings-sidebar');
    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
  openLoginModal() {
    console.log('Opening Login dialog');
    const activeModal = this.modalService.open(LoginDialogComponent, {});
   // activeModal.componentInstance.modalHeader = 'SIGN IN';

  }

  logOut() {
    console.log("Logging out");
    this.store.dispatch(new ActionSignIn(this.form.value));
  }
}
