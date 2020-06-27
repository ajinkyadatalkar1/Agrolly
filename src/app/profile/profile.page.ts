import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { HttpcallsService } from '../services/httpcalls.service';
import { Countries } from '../Country/countries';
import { States } from '../States/states';
import { Sums } from '../Sums/sums';


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
  constructor(private route: Router, private platform: Platform, private httpcalls: HttpcallsService, private country: Countries,
              private state: States, private city: Sums) {
    this.load_data();
    this.platform.backButton.subscribeWithPriority(10, () => {
      this.route.navigateByUrl('/tabs/tab2');
    });
    this.language = this.httpcalls.languageList;
   }

   ionViewWillEnter() {
    this.language = this.httpcalls.languageList;
    this.load_data();
   }

   ionViewDidEnter() {
    this.language = this.httpcalls.languageList;
    this.load_data();
   }

   showCountryIcon() {
    this.countrySelectedIcon = '../../assets/icon/' + this.countrySelected + '.svg';
    this.stateSelected = '';
    this.showStates = true;
    this.states = this.state.list[this.countrySelected];
    this.showCities = false;
    // this.citySelected = null;
  }

  update() {
    this.httpcalls.update_profile(this.name, this.citySelected, this.stateSelected, this.countrySelected, this.password);
    this.password = null;
    this.load_data();
    this.httpcalls.latitude = undefined;
    this.httpcalls.longitude = undefined;
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
    } else {
      this.showCities = false;
      this.citySelected = null;
    }
  }


  ngOnInit() {
  }

}
