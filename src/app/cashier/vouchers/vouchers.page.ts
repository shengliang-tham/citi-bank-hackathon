import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.page.html',
  styleUrls: ['./vouchers.page.scss'],
})
export class VouchersPage implements ViewWillEnter {
  vouchers: any[];

  constructor(private _service: AllServicesService) {}

  ionViewWillEnter() {
    this._service.getMerchants().subscribe((response) => {
      this.vouchers = [];

      let list = response;
      console.log(list);
      for (let i = 0; i < list.length; i++) {
        if (list[i].brandName === this._service.brandName) {
          for (let voucher of list[i].vouchers)
            this.vouchers.push({
              voucherName: voucher.voucherName,
              totalCount: voucher.totalCount,
              totalRemaining: voucher.totalRemaining,
            });
        }
      }
    });
    // this.vouchers = [
    //   {
    //     voucherName: 'National Day 15% Off',
    //     totalCount: 150,
    //     totalRemaining: 150,
    //   },
    //   {
    //     voucherName: 'Mango Day 15% Off',
    //     totalCount: 150,
    //     totalRemaining: 150,
    //   },
    //   {
    //     voucherName: 'Ladies Day 15% Off',
    //     totalCount: 150,
    //     totalRemaining: 150,
    //   },
    // ];
  }

  alternateColor(event) {}
}
