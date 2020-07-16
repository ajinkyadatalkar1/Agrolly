import { Component, OnInit } from '@angular/core';
import { HttpcallsService } from '../services/httpcalls.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cropmanagement',
  templateUrl: './cropmanagement.page.html',
  styleUrls: ['./cropmanagement.page.scss'],
})
export class CropmanagementPage implements OnInit {
  cropsListData: object;
  language: any;
  weekday: string[] = [];
  userSelectMonth: Date;
  month: number;
  year: number;

  annualForecast: object;
  newDate: string;
  monthMaxTemp = 0;
  monthMinTemp = 100;
  rainfall = 0;

  city: string;

  forecastMatch: string;
  constructor(private httpcalls: HttpcallsService, private platform: Platform, private route: Router) {
    this.cropsListData = this.httpcalls.cropsListData;
    this.language = this.httpcalls.languageList;
    this.annualForecast = this.httpcalls.annualForecast;

    this.forecastMatch = undefined;

    this.weekday[0] = this.language.Sunday;
    this.weekday[1] = this.language.Monday;
    this.weekday[2] = this.language.Tuesday;
    this.weekday[3] = this.language.Wednesday;
    this.weekday[4] = this.language.Thursday;
    this.weekday[5] = this.language.Friday;
    this.weekday[6] = this.language.Saturday;

    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/tab2');
    });
  }

  ionViewWillEnter() {
    this.cropsListData = this.httpcalls.cropsListData;
    this.language = this.httpcalls.languageList;
    this.annualForecast = this.httpcalls.annualForecast;
  }

  listCrops() {
    this.forecastMatch = 'show';
    this.rainfall = 0;
    this.monthMaxTemp = 0;
    this.monthMinTemp = 100;
    for (let i = 0 ; i < Object.keys(this.annualForecast).length ; i++) {
      this.newDate = this.annualForecast[i]['Date.fcst'];
      const date = new Date(this.newDate + 'T00:00:00');
      const month = date.getMonth();
      const year = date.getFullYear();

      if (this.month === month && this.year === year) {
        if (this.monthMaxTemp < this.annualForecast[i]['TEMPMAX_fcast_' + this.city]) {
          this.monthMaxTemp = this.annualForecast[i]['TEMPMAX_fcast_' + this.city];
        }

        if (this.monthMinTemp > this.annualForecast[i]['TEMPMIN_fcast_' + this.city]) {
          this.monthMinTemp  = this.annualForecast[i]['TEMPMIN_fcast_' + this.city];
        }
        this.rainfall += this.annualForecast[i]['SNfcast_' + this.city + '.mean'];
      }
      this.rainfall = Math.floor(this.rainfall);
    }
  }

  getDate() {
    const date = new Date(this.userSelectMonth);
    this.month = date.getMonth();
    this.year = date.getFullYear();
  }


  ngOnInit() {
  }
}
