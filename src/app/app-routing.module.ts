import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'customer',
    loadChildren: () =>
      import('./customer/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'cashier',
    loadChildren: () =>
      import('./cashier/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'vouchers',
    loadChildren: () =>
      import('./cashier/vouchers/vouchers.module').then(
        (m) => m.VouchersPageModule
      ),
  },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./customer/purchase/purchase.module').then(
        (m) => m.PurchasePageModule
      ),
  },
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'purchase',
    loadChildren: () =>
      import('./customer/purchase/purchase.module').then(
        (m) => m.PurchasePageModule
      ),
  },
  {
    path: 'voucher-details',
    loadChildren: () => import('./cashier/voucher-details/voucher-details.module').then( m => m.VoucherDetailsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
