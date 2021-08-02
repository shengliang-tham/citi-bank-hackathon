import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  encodedQR = '';
  scannedData;

  constructor(private barcodeScanner: BarcodeScanner) {}

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
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }
}
