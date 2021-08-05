import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2-details/tab2.page';
import { Tab2OverviewPage } from './tab2-overview/tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2OverviewPage,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2PageRoutingModule {}
