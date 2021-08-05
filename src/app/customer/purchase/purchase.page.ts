import { Component } from '@angular/core';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { AllServicesService } from 'src/app/services/all-services.service';

interface Voucher {
  title: string;
  points: number;
  imgUrl: string;
  qrCode: string;
  expiryDate: string;
}

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.page.html',
  styleUrls: ['./purchase.page.scss'],
})
export class PurchasePage {
  constructor(
    public modalController: ModalController,
    public _service: AllServicesService
  ) {}
}
