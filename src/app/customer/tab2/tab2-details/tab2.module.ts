import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2Page } from '../tab2-details/tab2.page';
import { Tab2PageRoutingModule } from '../tab2-details/tab2-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Tab2PageRoutingModule],
  declarations: [Tab2Page],
})
export class Tab2Module {}
