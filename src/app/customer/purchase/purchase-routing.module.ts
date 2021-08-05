import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurchasePage } from './purchase.page';

const routes: Routes = [
  {
    path: '',
    component: PurchasePage
  },
  {
    path: 'purchase-modal',
    loadChildren: () => import('./purchase-modal/purchase-modal.module').then( m => m.PurchaseModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchasePageRoutingModule {}
