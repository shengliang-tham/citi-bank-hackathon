import { Component, Input } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'qr-code-page',
  templateUrl: 'qr-code.page.html',
  styleUrls: ['qr-code.page.scss'],
})
export class QrCodePage {
  voucher = {
    voucherName: 'National Day 15% Off',
    voucherCode: 'NDP15',
    redemptionDate: '3/8/21 03:43PM',
    redemptionLocation: 'IMM',
    totalCount: 150,
    totalRemaining: 150,
    price: 15,
    loyaltyPoints: 15,
  };
  qrCode;
  constructor(private barcodeScanner: BarcodeScanner) {
    // this.voucher = {
    //   voucherName: 'National Day 15% Off',
    //   voucherCode: 'NDP15',
    //   redemptionDate: '3/8/21 03:43PM',
    //   redemptionLocation: 'IMM',
    //   totalCount: 150,
    //   totalRemaining: 150,
    //   price: 15,
    //   loyaltyPoints: 15,
    // };
  }

  ionViewDidEnter() {
    console.log(this.voucher);
    this.barcodeScanner.encode('TEXT_TYPE', this.voucher).then((data) => {
      this.qrCode = data;
    });
  }
}
