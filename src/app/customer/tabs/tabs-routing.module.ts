import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/customer/tabs/tab1',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
