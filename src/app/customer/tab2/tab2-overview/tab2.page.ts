import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AllServicesService } from 'src/app/services/all-services.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2OverviewPage {
  merchants: any[];
  filteredMerchants: any[];

  constructor(private router: Router, private _service: AllServicesService) {}

  ionViewWillEnter() {
    this._service.getMerchants().subscribe((response) => {
      this.merchants = [];
      let list = response;
      for (let i = 0; i < list.length; i++) {
        this.merchants.push({
          brandName: list[i].brandName,
          pictureUrl: list[i].pictureUrl,
        });
      }
      this.filteredMerchants = this.merchants;
    });
  }

  merchantSelected(m) {
    this.router.navigate(['/details']);
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
