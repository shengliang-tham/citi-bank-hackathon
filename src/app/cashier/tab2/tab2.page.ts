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

  scanBar() {
    this.barcodeScanner
      .scan()
      .then((barcodeData) => {
        alert('Barcode data ' + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;

        const tempObject = {
          merchantId: '610ac73a668ee57652a8af78',
          voucherName: 'National Day 15% Off',
        };
        this.allServices.redeemVoucher(tempObject).subscribe((data) => {
          console.log();

          this.presentToast();
        });
      })
      .catch((err) => {
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
