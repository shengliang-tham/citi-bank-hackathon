import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { QrCodePage } from './tab2-qr/qr-code.page';

interface Voucher {
  title: string;
  points: number;
  imgUrl: string;
  qrCode: string;
  expiryDate: string;
}

interface Location {
  title: string;
  imgUrl: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(public modalController: ModalController) {}

  locationCards: Location[] = [
    {
      title: 'IMM #02-01',
      imgUrl: 'assets/images/merchant-fila-imm-outlet.jpeg',
    },
    {
      title: 'ION Orchard #B1-28',
      imgUrl: 'assets/images/merchant-fila-imm-outlet.jpeg',
    },
    {
      title: 'Suntec City #01-413',
      imgUrl: 'assets/images/merchant-fila-imm-outlet.jpeg',
    },
  ];
  voucherCards: Voucher[] = [
    {
      title: '15% Off first purchase',
      points: 10,
      imgUrl: 'assets/images/merchant-fila-imm-outlet.jpeg',
      qrCode: 'temp',
      expiryDate: '2020-10-08',
    },
    {
      title: '30% Off first purchase',
      points: 20,
      imgUrl: 'assets/images/merchant-fila-imm-outlet.jpeg',
      qrCode: 'temp',
      expiryDate: '2020-11-08',
    },
    {
      title: '40% Off second purchase',
      points: 40,
      imgUrl: 'assets/images/merchant-fila-imm-outlet.jpeg',
      qrCode: 'temp',
      expiryDate: '2020-12-08',
    },
  ];

  slideOpt = {
    direction: 'horizontal',
    slidesPerView: 2,
    pagination: {
      el: '.swiper-pagination',
    },
  };

  async presentModal() {
    const modal = await this.modalController.create({
      component: QrCodePage,
      cssClass: 'small-modal',
    });
    return await modal.present();
  }
}
