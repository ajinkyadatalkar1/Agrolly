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
  month2: number;
  month3: number;
  year: number;
  vegetable: string = undefined;
  annualForecast: object;
  newDate: string;
  monthMaxTemp = 0;
  monthMinTemp = 100;
  rainfall = 0;
  rainfall2 = 0;
  rainfall3 = 0;
  city: string;
  country: string;
  cityList: string[] = [];

  // tslint:disable-next-line: max-line-length
  monthList: string[] =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February'];

  /* calculating water requirements of the crop */
  waterNeeded: number[] = [];
  waterNeeded2: number[] = [];
  waterNeeded3: number[] = [];
  city_index: number;
  evaporation_index: number;

  tempMedian: number = 0;
  tempMedian2: number = 0;
  tempMedian3: number = 0;

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

    if (this.httpcalls.cityList !== null || this.httpcalls.cityList !== undefined) {
      this.cityList = Object.values(this.httpcalls.cityList);
    }
  }

  ionViewWillEnter() {
    this.cropsListData = this.httpcalls.cropsListData;
    this.language = this.httpcalls.languageList;
    this.annualForecast = this.httpcalls.annualForecast;
    this.country = this.httpcalls.country;
  }

  listCrops() {
    this.forecastMatch = 'show';
    this.rainfall = 0;
    this.rainfall2 = 0;
    this.rainfall3 = 0;
    this.monthMaxTemp = 0;
    this.monthMinTemp = 100;
    this.waterNeeded = [];
    this.tempMedian = 0;
    this.tempMedian2 = 0;
    this.tempMedian3 = 0;
    for (let i = 0 ; i < Object.keys(this.annualForecast).length ; i++) {
      this.newDate = this.annualForecast[i]['Date.fcst'];
      const date = new Date(this.newDate + 'T00:00:00');
      const month = date.getMonth();
      const year = date.getFullYear();

      if (this.country === 'Mongolia') {
      // console.log('Called');
      if (this.monthList[this.month] === this.monthList[month] && this.year === year) {
        if (this.monthMaxTemp < this.annualForecast[i]['TEMPMAX_fcast_' + this.city]) {
          this.monthMaxTemp = this.annualForecast[i]['TEMPMAX_fcast_' + this.city];
        }

        if (this.monthMinTemp > this.annualForecast[i]['TEMPMIN_fcast_' + this.city]) {
          this.monthMinTemp  = this.annualForecast[i]['TEMPMIN_fcast_' + this.city];
        }
        this.rainfall += this.annualForecast[i]['SNfcast_' + this.city + '.mean'];
        this.tempMedian += this.annualForecast[i]['TEMPMEDIA_fcast_' + this.city];
      }

      if (this.monthList[month] === this.monthList[this.month + 1]) {
        this.rainfall2 += this.annualForecast[i]['SNfcast_' + this.city + '.mean'];
        this.tempMedian2 += this.annualForecast[i]['TEMPMEDIA_fcast_' + this.city];
      }

      if (this.monthList[month] === this.monthList[this.month + 2]) {
        this.rainfall3 += this.annualForecast[i]['SNfcast_' + this.city + '.mean'];
        this.tempMedian3 += this.annualForecast[i]['TEMPMEDIA_fcast_' + this.city];
      }
    } else {
      if (this.monthList[this.month] === this.monthList[month] && this.year === year) {
        // console.log('TEMPMAX_fcast_' + this.city);
        // console.log('called' + this.annualForecast[i]['TEMPMAX_fcast_' + this.city]);
        if (this.monthMaxTemp < this.annualForecast[i]['TEMPMAX_fcast_' + this.city]) {
          this.monthMaxTemp = this.annualForecast[i]['TEMPMAX_fcast_' + this.city];
        }

        if (this.monthMinTemp > this.annualForecast[i]['TEMPMIN_fcast_' + this.city]) {
          this.monthMinTemp  = this.annualForecast[i]['TEMPMIN_fcast_' + this.city];
        }
        this.rainfall += this.annualForecast[i]['SNfcast_' + this.city + '.mean'];
        this.tempMedian += this.annualForecast[i]['TEMPMEDIA_fcast_' + this.city];
      }

      if (this.monthList[month] === this.monthList[this.month + 1]) {
        this.rainfall2 += this.annualForecast[i]['SNfcast_' + this.city + '.mean'];
        this.tempMedian2 += this.annualForecast[i]['TEMPMEDIA_fcast_' + this.city];
      }

      if (this.monthList[month] === this.monthList[this.month + 2]) {
        this.rainfall3 += this.annualForecast[i]['SNfcast_' + this.city + '.mean'];
        this.tempMedian3 += this.annualForecast[i]['TEMPMEDIA_fcast_' + this.city];
      }
    }
    }
    this.rainfall = Math.floor(this.rainfall);
    this.rainfall2 = Math.floor(this.rainfall2);
    this.rainfall3 = Math.floor(this.rainfall3);

    this.tempMedian = this.tempMedian / 30;
    this.tempMedian2 = this.tempMedian2 / 30;
    this.tempMedian3 = this.tempMedian3 / 30;
    // console.log('min temp' + this.monthMinTemp);
    this.waterRequirement(this.month);
  }

  waterRequirement(month: number) {
    // console.log('Po val:' + this.httpcalls.poValue);
    for (let i = 0; i < Object.keys(this.httpcalls.poValue).length; i++) {
      if (this.httpcalls.poPlaces[this.city] === 'N_' + this.httpcalls.poValue[i]['city_long'] ) {
        for (let j = 0; j < Object.keys(this.cropsListData).length ; j++) {
          this.month2 = month + 2;
          if (this.month2 === 13) {
            this.month2 = 1;
          }
          if (this.month2 === 14) {
            this.month2 = 2;
          }

          this.month3 = month + 3;
          if (this.month3 === 13) {
            this.month3 = 1;
          }
          if (this.month3 === 14) {
            this.month3 = 2;
          }
          // tslint:disable-next-line: max-line-length
          this.waterNeeded[j] = (this.httpcalls.poValue[i]['N_' + (month + 1)] * (0.46 * this.tempMedian + 8) * this.cropsListData[j]['kc_month1']) * 30;
          this.waterNeeded[j] = Math.floor(this.waterNeeded[j]);


          // tslint:disable-next-line: max-line-length
          this.waterNeeded2[j] = (this.httpcalls.poValue[i]['N_' + (this.month2)] * (0.46 * this.tempMedian + 8) * this.cropsListData[j]['kc_month2']) * 30;
          this.waterNeeded2[j] = Math.floor(this.waterNeeded2[j]);


          // tslint:disable-next-line: max-line-length
          this.waterNeeded3[j] = (this.httpcalls.poValue[i]['N_' + (this.month3)] * (0.46 * this.tempMedian + 8) * this.cropsListData[j]['kc_month3']) * 30;
          this.waterNeeded3[j] = Math.floor(this.waterNeeded3[j]);
        }
        break;
      } else if (this.httpcalls.poPlaces[this.city] === this.cityList['po_place']) {
        for (let j = 0; j < Object.keys(this.cropsListData).length ; j++) {
          this.month2 = month + 2;
          if (this.month2 === 13) {
            this.month2 = 1;
          }
          if (this.month2 === 14) {
            this.month2 = 2;
          }

          this.month3 = month + 3;
          if (this.month3 === 13) {
            this.month3 = 1;
          }
          if (this.month3 === 14) {
            this.month3 = 2;
          }
          // tslint:disable-next-line: max-line-length
          this.waterNeeded[j] = (this.httpcalls.poValue[i]['S_' + (month + 1)] * (0.46 * this.tempMedian + 8) * this.cropsListData[j]['kc_month1']) * 30;
          this.waterNeeded[j] = Math.floor(this.waterNeeded[j]);


          // tslint:disable-next-line: max-line-length
          this.waterNeeded2[j] = (this.httpcalls.poValue[i]['S_' + (this.month2)] * (0.46 * this.tempMedian + 8) * this.cropsListData[j]['kc_month2']) * 30;
          this.waterNeeded2[j] = Math.floor(this.waterNeeded2[j]);


          // tslint:disable-next-line: max-line-length
          this.waterNeeded3[j] = (this.httpcalls.poValue[i]['S_' + (this.month3)] * (0.46 * this.tempMedian + 8) * this.cropsListData[j]['kc_month3']) * 30;
          this.waterNeeded3[j] = Math.floor(this.waterNeeded3[j]);
        }
        break;
      }
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
