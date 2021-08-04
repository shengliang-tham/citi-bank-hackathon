import { Component } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  items: string[];
  filteredData: string[];

  constructor() {}

  ionViewWillEnter() {
    const searchbar = document.querySelector('ion-searchbar');
    this.items = ['ndp15', 'scp30', 'ndp30', 'ndwnd', 'nend'];
    this.filteredData = this.items;
    console.log(this.items);
    console.log(this.filteredData);

    searchbar.addEventListener('ionInput', this.handleInput);
  }

  handleInput(event) {
    console.log(event);
    this.filteredData = this.items;
    const query = event.target.value.toLowerCase();

    console.log(this.items);

    requestAnimationFrame(() => {
      this.items.forEach((item) => {
        const shouldShow = item.indexOf(query) > -1;

        if (!shouldShow) {
          const index = item.indexOf(query);
          this.filteredData.splice(index, 1);
        }
      });
    });
  }
}
