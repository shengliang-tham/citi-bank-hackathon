/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/prefer-for-of */
import { Component, OnInit } from '@angular/core';
import { ModalController, ViewWillEnter } from '@ionic/angular';
import { AllServicesService } from '../../services/all-services.service';
import { VoucherDetailsPage } from '../voucher-details/voucher-details.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit, ViewWillEnter {
  items: string[];
  filteredData: string[];

  constructor(
    private _service: AllServicesService,
    private modalController: ModalController
  ) {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  brandName = '';

  ngOnInit() {
    this.brandName = this._service.brandName;
  }

  ionViewWillEnter() {
    this.filteredData = this.items;
    this._service.getMerchants().subscribe((response) => {
      this.items = [];
      let list = response;
      for (let i = 0; i < list.length; i++) {
        if (list[i].brandName === this.brandName) {
          for (let voucher of list[i].vouchers)
            this.items.push(voucher.voucherCode);
        }
      }
      this.filteredData = this.items;
    });

    // searchbar.addEventListener('ionInput', this.handleInput);
  }

  handleInput(event) {
    const query = event.target.value.toUpperCase();
    // console.log(query);

    if (query !== '') {
      this.filteredData = [];
      requestAnimationFrame(() => {
        this.items.forEach((item) => {
          const shouldShow = item.indexOf(query) > -1;

          if (shouldShow) {
            // const index = item.indexOf(query);
            // console.log(index);
            this.filteredData.push(item);
          }
        });
      });
    } else {
      this.filteredData = this.items;
    }
  }

  async presentModal() {
    console.log('Hello');
    const modal = await this.modalController.create({
      component: VoucherDetailsPage,
      cssClass: 'small-modal',
    });
    return await modal.present();
  }
}
