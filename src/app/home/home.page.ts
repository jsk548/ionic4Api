import { Component } from '@angular/core';
import { apiService } from '../providers/apiService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private data: any;
  constructor(private api: apiService) {}

  ionViewDidEnter() {
    this.api.getCurrentWeatherData().then((data)=>{
      this.data = data;
    });
  }
}
