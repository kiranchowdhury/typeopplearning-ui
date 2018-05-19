import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionContainerComponent } from './subscription-container/subscription-container.component';
import { PurchaseTrainingComponent } from './purchase-training/purchase-training.component';
import { AllowedTrainingComponent } from './allowed-training/allowed-training.component';
import { BudgetComponent } from './budget/budget.component';

const routes: Routes = [{
  path: '',
  component: SubscriptionContainerComponent,
  children: [{
    path: 'purchase',
    component: PurchaseTrainingComponent
  }, {
    path: 'allowedtraining',
    component: AllowedTrainingComponent
  }, {
    path: 'budget',
    component: BudgetComponent
  }, {
    path: '',
    redirectTo: 'purchase',
    pathMatch: 'full'
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscriptionsRoutingModule { }
