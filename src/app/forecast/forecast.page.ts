import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit {
  loginStatus: boolean;
  currentForecast: object;
  currentForecast6: object;
  currentForecast12: object;
  currentForecast18: object;
  language: any;
  city: string;
  state: string;
  country: string;
  constructor(private httpcalls: HttpcallsService, private platform: Platform, private route: Router) {
    this.loginStatus = this.httpcalls.loggedIn;
    this.currentForecast = this.httpcalls.currentForecast;
    this.currentForecast6 = this.httpcalls.currentForecast6;
    this.currentForecast12 = this.httpcalls.currentForecast12;
    this.currentForecast18 = this.httpcalls.currentForecast18;
    this.language = this.httpcalls.languageList;

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/tab2');
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() { // Lifecycle event
    this.loginStatus = this.httpcalls.loggedIn;
    this.currentForecast = this.httpcalls.currentForecast;
    this.currentForecast6 = this.httpcalls.currentForecast6;
    this.currentForecast12 = this.httpcalls.currentForecast12;
    this.currentForecast18 = this.httpcalls.currentForecast18;
    this.language = this.httpcalls.languageList;
    this.city = this.httpcalls.city;
    this.state = this.httpcalls.state;
    this.country = this.httpcalls.country;
  }
}
