import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { WelcomeModule } from './welcome/welcome.module';
import { CertificatesModule } from './certificates/certificates.module';
import { FaqModule } from './faq/faq.module';
import { HowtoModule } from './howto/howto.module';
import { ProfilesModule } from './profiles/profiles.module';
import { TrainingsModule } from './trainings/trainings.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    WelcomeModule,
    CertificatesModule,
    FaqModule,
    HowtoModule,
    ProfilesModule,
    TrainingsModule,
    
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
