import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { HttpcallsService } from '../services/httpcalls.service';
import { Countries } from '../Country/countries';
import { States } from '../States/states';
import { Sums } from '../Sums/sums';
import { LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {
  language: any;
  countries: any;
  states: any;
  cities: any;
  showStates: boolean;
  showCities: boolean;
  name: string;
  password: string;
  stateSelected: string;
  countrySelected: string;
  countrySelectedIcon: string;
  citySelected: string;
  brazilCities: object;

  showCropDataLoadingSubscriber: Subscription;
  cropdataretriveInterval: any;
  cropLoadingMessage: string;

  constructor(private route: Router, private platform: Platform, private httpcalls: HttpcallsService, private country: Countries,
              private state: States, private city: Sums, private loading: LoadingController) {
    this.load_data();
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/tab2');
    });
    this.language = this.httpcalls.languageList;
    this.brazilCities = this.httpcalls.cityList;
   }

   ionViewWillEnter() {
    this.language = this.httpcalls.languageList;
    this.load_data();
    this.brazilCities = this.httpcalls.cityList;

   }

   ionViewDidEnter() {
    this.language = this.httpcalls.languageList;
    this.load_data();
    this.brazilCities = this.httpcalls.cityList;

   }

   showCountryIcon() {
    this.countrySelectedIcon = '../../assets/icon/' + this.countrySelected + '.svg';
    this.stateSelected = '';
    this.citySelected = '';
    this.showStates = true;
    this.showCities = false;
    this.states = this.state.list[this.countrySelected];
  }

  update() {
    this.httpcalls.update_profile(this.name, this.citySelected, this.stateSelected, this.countrySelected, this.password);
    setTimeout(() => {
      this.password = null;
      this.load_data();
      this.httpcalls.latitude = undefined;
      this.httpcalls.longitude = undefined;
      this.httpcalls.annualForecast = undefined;
      this.cropDataSubscriber();
    }, 1500);
  }

  load_data() {
    this.name = this.httpcalls.name;
    this.countries = this.country.Country;
    this.countrySelected = this.httpcalls.country;
    this.stateSelected = this.httpcalls.state;
    this.citySelected = this.httpcalls.city;
    this.countrySelectedIcon = '../../assets/icon/earth.svg';

    if (this.countrySelected !== undefined || this.countrySelected !== null || this.countrySelected !== '') {
      this.countrySelectedIcon = '../../assets/icon/' + this.countrySelected + '.svg';
      this.showStates = true;
      this.states = this.state.list[this.countrySelected];
      if (this.stateSelected !== undefined || this.stateSelected !== null) {
        this.showStates = true;
        this.showCity();
      }
    }
  }

  showCity() {
    if (this.countrySelected === 'Mongolia' && (this.stateSelected === 'Dornod' || this.stateSelected === 'Sukhbaatar' ||
         this.stateSelected === 'Khentii')) {
      this.showCities = true;
      this.cities = undefined;
      if (this.stateSelected === 'Dornod') {
        this.cities = this.city.cities[0].Dornod;
      } else if (this.stateSelected === 'Sukhbaatar') {
        this.cities = this.city.cities[0].Sukhbaatar;
      } else if (this.stateSelected === 'Khentii') {
        this.cities = this.city.cities[0].Khentii;
      } else {
        this.showCities = false;
      }
    } else if (this.countrySelected === 'Brazil' && this.stateSelected === 'Paraná (PR)') {
      this.showCities = true;
      // this.citySelected = null;
    } else {
      this.showCities = false;
      this.citySelected = null;
    }
  }

  async cropDataSubscriber() {
    this.httpcalls.getForecastAnnual();
    this.cropLoadingMessage = 'Loading new crop data and annual weather forecast, please wait...';
    const loader = await this.loading.create({
      message: this.cropLoadingMessage,
    });
    await loader.present();
    let counter = 0;

    this.cropdataretriveInterval = setInterval(() => {
      this.showCropDataLoadingSubscriber = this.httpcalls.checkAnnualForecast().subscribe((data) => {
        counter++;
        if (data !== undefined) {
          loader.dismiss();
          clearInterval(this.cropdataretriveInterval);
          this.route.navigateByUrl('/tabs/tab1');
        }

        if (counter % 1000 === 0) {
          this.cropLoadingMessage = 'Data is taking longer to load due to poor internet connectivity. Retrying...';
          loader.setAttribute('message', this.cropLoadingMessage);
          this.httpcalls.getForecastAnnual();
        }
      });
    }, 100);
  }

  ngOnInit() {
  }

}
