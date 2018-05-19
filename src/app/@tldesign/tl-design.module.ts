import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ButtonSmallComponent } from './button-small/button-small.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ButtonComponent, ButtonSmallComponent],
  exports: [ButtonComponent,ButtonSmallComponent]
})
export class TlDesignModule { }
