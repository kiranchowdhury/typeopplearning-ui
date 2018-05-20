import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HowToComponent } from './howto/how-to/how-to.component';
import { FaqComponent } from './faq/faq.component';
import { ProfilesContainerComponent } from './profiles/profiles-container/profiles-container.component';
import { TrainingContainerComponent } from './trainings/training-container/training-container.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { LoginGuard } from '../@core/guards/login.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'welcome',
    component: WelcomeComponent,
  },  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  }, {
    path: 'traininglibs',
    loadChildren: './training-library/training-library.module#TrainingLibraryModule'
  }, {
    path: 'howto',
    component: HowToComponent,
    canActivate: [LoginGuard]
  }, {
    path: 'faq',
    component: FaqComponent
  }, {
    path: 'subscriptions',
    loadChildren: './subscriptions/subscriptions.module#SubscriptionsModule',
    canActivate: [LoginGuard]
  }, {
    path: 'profiles',
    component: ProfilesContainerComponent,
    canActivate: [LoginGuard]
  }, {
    path: 'trainings',
    component: TrainingContainerComponent,
    canActivate: [LoginGuard]
  }, {
    path: 'userlist',
    loadChildren: './user-list/user-list.module#UserListModule'
  }, {
    path: 'certificates',
    component: CertificatesComponent,
    canActivate: [LoginGuard]
  }, {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  }
],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
