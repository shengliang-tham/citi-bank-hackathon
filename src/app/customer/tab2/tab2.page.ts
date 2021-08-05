/* eslint-disable @typescript-eslint/member-ordering */
import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { AllServicesService } from 'src/app/services/all-services.service';
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
export class Tab2Page implements ViewWillEnter {
  constructor(
    public modalController: ModalController,
    public _service: AllServicesService
  ) {}

  pictureUrl = '';

  ionViewWillEnter() {
    this._service.getMerchants().subscribe((response) => {
      this.voucherCards = [];
      let list = response;
      for (let i = 0; i < list.length; i++) {
        if (list[i].brandName === this._service.brandName) {
          this.pictureUrl = list[i].pictureUrl;
          for (let voucher of list[i].vouchers) this.voucherCards.push(voucher);
        }
      }
      console.log(this.voucherCards);
    });
  }

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
      imgUrl: 'assets/images/fila-logo.png',
      qrCode: 'temp',
      expiryDate: '2020-10-08',
    },
    {
      title: '30% Off first purchase',
      points: 20,
      imgUrl: 'assets/images/fila-logo.png',
      qrCode: 'temp',
      expiryDate: '2020-11-08',
    },
    {
      title: '40% Off second purchase',
      points: 40,
      imgUrl: 'assets/images/fila-logo.png',
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
