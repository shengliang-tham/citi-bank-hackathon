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
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
