import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  merchants: any[];
  filteredMerchants: any[];

  constructor() {}

  ionViewWillEnter() {
    this.merchants = [
      {
        brandName: 'SPAO',
        pictureUrl:
          'https://res.cloudinary.com/dwtlyky3v/image/upload/v1628091330/citi-bank-hackathon/spao_1_user_search_dpoyc9.png',
      },
      {
        brandName: 'SPAO',
        pictureUrl:
          'https://res.cloudinary.com/dwtlyky3v/image/upload/v1628091330/citi-bank-hackathon/spao_1_user_search_dpoyc9.png',
      },
      {
        brandName: 'SPAO',
        pictureUrl:
          'https://res.cloudinary.com/dwtlyky3v/image/upload/v1628091330/citi-bank-hackathon/spao_1_user_search_dpoyc9.png',
      },
      {
        brandName: 'SPAO',
        pictureUrl:
          'https://res.cloudinary.com/dwtlyky3v/image/upload/v1628091330/citi-bank-hackathon/spao_1_user_search_dpoyc9.png',
      },
    ];

    this.filteredMerchants = this.merchants;
  }

  handleInput(event) {
    const query = event.target.value.toUpperCase();

    console.log(query);

    if (query !== '') {
      this.filteredMerchants = [];
      requestAnimationFrame(() => {
        this.merchants.forEach((merchant) => {
          const shouldShow = merchant.brandName.indexOf(query) > -1;

          if (shouldShow) {
            // const index = merchant.brandName.indexOf(query);
            // console.log(index);
            this.filteredMerchants.push(merchant);
          }
        });
      });
    } else {
      this.filteredMerchants = this.merchants;
    }
    console.log(this.filteredMerchants);
  }
}
