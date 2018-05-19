import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerContainerComponent } from './customer-container/customer-container.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { CustomerItemComponent } from './customer-item/customer-item.component';
import { CustomersService } from './customers.service';
import { SharedModule } from '../../@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from './customers.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './customer.effects';
import { CustomerSearchComponent } from './customer-search/customer-search.component';


@NgModule({
  imports: [
    SharedModule,
    CustomersRoutingModule,
    StoreModule.forFeature('customers',{
        custState: customerReducer
    }),
    EffectsModule.forFeature([CustomersEffects])
  ],
  declarations: [CustomerContainerComponent, CustomerlistComponent, CustomerItemComponent, CustomerSearchComponent],
  providers: [CustomersService]
})
export class CustomersModule { }
