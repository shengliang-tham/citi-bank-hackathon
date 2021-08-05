import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { AllServicesService } from 'src/app/services/all-services.service';

interface Transaction {
  title: string;
  location: string;
  datetime: string;
  imgUrl: string;
}
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements ViewWillEnter {
  constructor(private _service: AllServicesService) {}

  transactionList;

  ionViewWillEnter() {
    this._service.getMerchants().subscribe((response) => {
      this.transactionList = [];
      let list = response;
      for (let i = 0; i < list.length; i++) {
        if (list[i].brandName === this._service.brandName) {
          for (let voucher of list[i].vouchers)
            this.transactionList.push(voucher);
        }
      }
      console.log(this.transactionList);
    });
  }
}
