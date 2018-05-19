import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusyIndicatorComponent } from './busy-indicator/busy-indicator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';
import { TlDesignModule } from '../@tldesign/tl-design.module';

@NgModule({
  imports: [
  ],
  declarations: [BusyIndicatorComponent, ModalComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BusyIndicatorComponent,
    ModalComponent,
    TlDesignModule
  ],
  entryComponents: [ModalComponent]
})
export class SharedModule { }
