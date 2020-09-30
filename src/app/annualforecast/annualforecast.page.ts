import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-annualforecast',
  templateUrl: './annualforecast.page.html',
  styleUrls: ['./annualforecast.page.scss'],
})
export class AnnualforecastPage implements OnInit {
  userSelectMonth: Date;
  month: number;
  year: number;
  city: string;
  annualForecast: object;
  requestedForecast: string[][] = [];
  requestedForecastJson: object;
  requestedForecastDate: string[] = [];
  tempMax: string;
  tempMin: string;
  rain: string;
  icon: string;
  obj: string;
  precipitation: string;
  displayDate: string;
  weekday: string[] = [];
  day: string;
  newDate: string;
  language: any;
  country: string;
  cityList: object;
  constructor(private httpcalls: HttpcallsService, private platform: Platform, private route: Router) {
    this.annualForecast = this.httpcalls.annualForecast;
    this.language = this.httpcalls.languageList;
    this.country = this.httpcalls.country;
    this.cityList = this.httpcalls.cityList;

    this.weekday[0] = this.language.Sunday;
    this.weekday[1] = this.language.Monday;
    this.weekday[2] = this.language.Tuesday;
    this.weekday[3] = this.language.Wednesday;
    this.weekday[4] = this.language.Thursday;
    this.weekday[5] = this.language.Friday;
    this.weekday[6] = this.language.Saturday;

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/forecast');
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.annualForecast = this.httpcalls.annualForecast;
    this.language = this.httpcalls.languageList;
    this.country = this.httpcalls.country;
    this.cityList = this.httpcalls.cityList;


    this.weekday[0] = this.language.Sunday;
    this.weekday[1] = this.language.Monday;
    this.weekday[2] = this.language.Tuesday;
    this.weekday[3] = this.language.Wednesday;
    this.weekday[4] = this.language.Thursday;
    this.weekday[5] = this.language.Friday;
    this.weekday[6] = this.language.Saturday;
  }

  ionViewWillLeave() {
    this.requestedForecast = null;
  }

  getDate() {
    const date = new Date(this.userSelectMonth);
    this.month = date.getMonth();
    this.year = date.getFullYear();
  }

  fetchData() {
    this.requestedForecast = [];
    let i = 0;
    while (i < 365) {
      // console.log(this.city);
      this.requestedForecastDate = [];
      this.newDate = this.annualForecast[i]['Date.fcst'];

      const date = new Date(this.newDate + 'T00:00:00');
      const day = this.weekday[date.getDay()];
      const month = date.getMonth();
      const year = date.getFullYear();

      this.tempMax = this.annualForecast[i]['TEMPMAX_fcast_' + this.city];
      this.tempMin = this.annualForecast[i]['TEMPMIN_fcast_' + this.city];
      this.rain = this.annualForecast[i]['rained_' + this.city + '_yN'];
      this.precipitation = this.annualForecast[i]['fcast_class_' + this.city];
      this.icon = this.annualForecast[i]['icon_' + this.city];
      if (this.month === month && this.year === year) {
        this.requestedForecastDate.push(this.tempMax);
        this.requestedForecastDate.push(this.tempMin);
        this.requestedForecastDate.push(this.rain);
        this.requestedForecastDate.push(this.precipitation);
        this.requestedForecastDate.push(this.newDate);
        this.requestedForecastDate.push(day);
        const dayNum = (date.getDate() / 7).toString();
        const dayNumInt = parseInt(dayNum) + 1;
        this.requestedForecastDate.push(dayNumInt.toString());
        this.requestedForecastDate.push(this.icon);
      }
      if (this.requestedForecastDate.length > 0) {
        this.requestedForecast.push(this.requestedForecastDate);
      }
      i++;
    }
    // console.log(this.annualForecast[10]['SNfcast_' + this.city + '.mean']);
  }
}
