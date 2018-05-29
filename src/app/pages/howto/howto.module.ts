import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HowToComponent } from './how-to/how-to.component';

import { SharedModule } from '../../@shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [HowToComponent]
})
export class HowtoModule { }
