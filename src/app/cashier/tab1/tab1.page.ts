import { Component } from '@angular/core';

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
    this.items = ['ndp15', 'scp30', 'ndp30', 'ndwnd', 'nend'];
    this.filteredData = this.items;

    // searchbar.addEventListener('ionInput', this.handleInput);
  }

  handleInput(event) {
    const query = event.target.value.toLowerCase();
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
}
