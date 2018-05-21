import { SharedModule } from './../../@shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [FaqComponent]
})
export class FaqModule { }
