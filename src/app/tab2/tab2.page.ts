import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import QRCode from 'easyqrcodejs';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements AfterViewInit {
  @ViewChild('qrcode', { static: false }) qrcode: ElementRef;
  encodedQR = '';
  scannedData;

  constructor(private barcodeScanner: BarcodeScanner) {}

  generateQR() {
    this.barcodeScanner.encode('TEXT_TYPE', 'testestest').then((data) => {
      console.log(data);
      this.encodedQR = data;
    });
  }

  ngAfterViewInit() {
    // Options
    const options = {
      text: 'www.easyproject.cn/donation',

      width: 240,
      height: 240,
      colorDark: '#000000',
      colorLight: '#ffffff',

      correctLevel: QRCode.CorrectLevel.H, // L, M, Q, H

      dotScale: 0.4,
    };

    // Create new QRCode Object
    new QRCode(this.qrcode.nativeElement, options);
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
