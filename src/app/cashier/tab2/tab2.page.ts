import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ToastController } from '@ionic/angular';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  encodedQR = '';
  scannedData;

  constructor(
    private barcodeScanner: BarcodeScanner,
    private allServices: AllServicesService,
    private toastController: ToastController
  ) {}

  generateQR() {
    this.barcodeScanner.encode('TEXT_TYPE', 'testestest').then((data) => {
      console.log(data);
      this.encodedQR = data;
    });
  }

  // ionViewDidEnter() {
  //   const json = {
  //     voucherName: 'National Day 15% Off',
  //     voucherCode: 'NDP15',
  //     redemptionDate: '3/8/21 03:43PM',
  //     redemptionLocation: 'IMM',
  //     totalCount: 150,
  //     totalRemaining: 150,
  //     price: 15,
  //     loyaltyPoints: 15,
  //   };
  //   this.allServices.redeemVoucher(json).subscribe((data) => {
  //     // this.presentToast();
  //   });
  // }

  scanBar() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        // alert('Barcode data ' + JSON.stringify(barcodeData));
        this.scannedData = {
          voucherName: 'National Day 15% Off',
          voucherCode: 'NDP15',
          redemptionDate: '3/8/21 03:43PM',
          redemptionLocation: 'IMM',
          totalCount: 150,
          totalRemaining: 150,
          price: 15,
          loyaltyPoints: 15,
        };

        this.allServices.redeemVoucher(this.scannedData).subscribe(
          (data) => {
            alert(data);
            this.presentToast();
          },
          (error) => alert(error)
        );
      })
      .catch((err) => {
        alert(err);
        console.log('Error', err);
      });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Redemption success!',
      duration: 2000,
    });

    toast.present();
  }
}
