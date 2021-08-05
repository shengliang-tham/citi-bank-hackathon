import { Component } from '@angular/core';

@Component({
  selector: 'app-vouchers',
  templateUrl: './vouchers.page.html',
  styleUrls: ['./vouchers.page.scss'],
})
export class VouchersPage {
  vouchers: any[];

  constructor() {}

  ionViewWillEnter() {
    this.vouchers = [
      {
        voucherName: 'National Day 15% Off',
        totalCount: 150,
        totalRemaining: 150,
      },
      {
        voucherName: 'Mango Day 15% Off',
        totalCount: 150,
        totalRemaining: 150,
      },
      {
        voucherName: 'Ladies Day 15% Off',
        totalCount: 150,
        totalRemaining: 150,
      },
    ];
  }

  alternateColor(event) {}
}
