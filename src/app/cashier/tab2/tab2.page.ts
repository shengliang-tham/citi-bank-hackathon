import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

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
    private qrScanner: QRScanner
  ) {}

  generateQR() {
    this.barcodeScanner.encode('TEXT_TYPE', 'testestest').then((data) => {
      console.log(data);
      this.encodedQR = data;
    });
  }

  scanBar() {
    // this.barcodeScanner
    //   .scan()
    //   .then((barcodeData) => {
    //     alert('Barcode data ' + JSON.stringify(barcodeData));
    //     this.scannedData = barcodeData;
    //   })
    //   .catch((err) => {
    //     console.log('Error', err);
    //   });

    this.qrScanner
      .prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted

          // start scanning
          const scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
}
