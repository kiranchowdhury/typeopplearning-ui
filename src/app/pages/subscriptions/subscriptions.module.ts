import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionContainerComponent } from './subscription-container/subscription-container.component';
import { PurchaseTrainingComponent } from './purchase-training/purchase-training.component';
import { AllowedTrainingComponent } from './allowed-training/allowed-training.component';
import { BudgetComponent } from './budget/budget.component';

@NgModule({
  imports: [
    CommonModule,
    SubscriptionsRoutingModule
  ],
  declarations: [SubscriptionContainerComponent, PurchaseTrainingComponent, AllowedTrainingComponent, BudgetComponent]
})
export class SubscriptionsModule { }
